import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import * as action from '../../store/application.actions';
import { CardprofileServiceService } from './cardprofile-service.service';
@Component({
  selector: 'app-cardprofile',
  templateUrl: './cardprofile.component.html',
  styleUrls: ['./cardprofile.component.scss']
})
export class CardprofileComponent implements OnInit {

  dataconected : any = {};

  apprd : Observable<any> | undefined; 

  constructor(
    private cardprofileService: CardprofileServiceService, 
    private store: Store<{ user: any }>,
    private cookieService: CookieService
    ) {

    }

  ngOnInit(): void {
    
    this.fetchData();
  }

  logout(){
    localStorage.removeItem('logueduser');
    this.cookieService.deleteAll();
    window.location.href = '/';
  }

  async fetchData(){
    //this.store.dispatch(action.userConected({user: this.dataconected}));
    if(!localStorage.getItem('logueduser')){
      let data = await this.cardprofileService.getDataConnected();
      localStorage.setItem('logueduser', JSON.stringify({
        id: data.data.id,
        name: data.data.name,
        email: data.data.email,
        groups: data.data.groups,
      }));

      let localdata = localStorage.getItem('logueduser') || '{}';
      this.dataconected = JSON.parse(localdata);
    } else {
      let localdata = localStorage.getItem('logueduser') || '{}';
      this.dataconected = JSON.parse(localdata);
    }
  }

}
