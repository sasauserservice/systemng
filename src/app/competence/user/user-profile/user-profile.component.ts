import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { MatchUsersService } from '../match-users.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: MatchUsersService) { }
 
  ngOnInit(): void {
    this.getBasicInfo()
  }

  basicInfo:any = {}


  getBasicInfo(){
    this.service.getConectedProfile().subscribe( (response:any) => {
      this.basicInfo = response
    },(error:any)=>{

    })
  }

}
