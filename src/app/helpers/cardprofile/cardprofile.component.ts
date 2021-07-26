import { Component, OnInit } from '@angular/core';
import { CardprofileServiceService } from './cardprofile-service.service';

@Component({
  selector: 'app-cardprofile',
  templateUrl: './cardprofile.component.html',
  styleUrls: ['./cardprofile.component.scss']
})
export class CardprofileComponent implements OnInit {

  dataconected : any = {};

  constructor(private cardprofileService: CardprofileServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(){
    this.dataconected = await this.cardprofileService.getDataConnected();
  }

}
