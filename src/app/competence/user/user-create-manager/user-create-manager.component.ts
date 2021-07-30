import { Component, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { MatchUsersService } from '../match-users.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-user-create-manager',
  templateUrl: './user-create-manager.component.html',
  styleUrls: ['./user-create-manager.component.scss']
})
export class UserCreateManagerComponent implements OnInit {

  @Output() eventFinishCreate = new EventEmitter<any>();

  constructor(private service: MatchUsersService) { }

  forSendInfo   : any = {
    types: [],
    name: '',
    email: '',
    password:''
  }
  selectedTypes : Array<any> = []
  showInfoBoxes :any = {
    1:false, 
    2:false
  }

  ngOnInit(): void {
  }
  setshowInfoBoxes(){
    this.showInfoBoxes = {
      '1': this.forSendInfo.types.includes("101"),
      '2': this.forSendInfo.types.includes("102"),
      '3': this.forSendInfo.types.includes("103")
    }
  }


  onCheckParameter(element:any){
    
    if(element.target.checked){
      this.selectedTypes.push(element.target.value);
    }else{
      let index = this.selectedTypes.findIndex(rank => rank === element.target.value);
      this.selectedTypes.splice(index, 1);
        
    }

    this.forSendInfo.types = this.selectedTypes;
    this.setshowInfoBoxes();
    
  }

  cancelCreation(){
    this.eventFinishCreate.emit();
  }  
 
  createUser(){

    if(this.forSendInfo.name == '' || this.forSendInfo.email == '' ||this.forSendInfo.password == '' || this.forSendInfo.types == []){
      Swal.fire({
        title: 'Info!',
        text: 'Not empty values',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
       
    }else{
        if(this.forSendInfo){
        this.service.sendUser(this.forSendInfo).then( (response: any) => {
          if(response){ 
            Swal.fire({
              title: 'Success!',
              text: 'User saved',
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false
            });
            this.eventFinishCreate.emit();
            //this.penalties = [];
          }
        }).catch((error: any) => {
          
          if(error){
            if(error.status == 401){
              Swal.fire({
                title: 'Info!',
                text: 'The Email '+this.forSendInfo.email+' is allready registered',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false
              });
            }else{
              Swal.fire({
              title: 'Info!',
              text: 'Error on server',
              icon: 'info',
              showCancelButton: false,
              showConfirmButton: false
            });
            }
            
          }
        } ); 
      }else{

        Swal.fire({ 
          title: 'Info!',
          text: 'Title, points and description required',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false
        });

      }
    }
    
  }

  cancel(){
    this.eventFinishCreate.emit();
  }
}
