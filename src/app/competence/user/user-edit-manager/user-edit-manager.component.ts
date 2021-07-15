import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { MatchUsersService } from '../match-users.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-user-edit-manager',
  templateUrl: './user-edit-manager.component.html',
  styleUrls: ['./user-edit-manager.component.scss']
})
export class UserEditManagerComponent implements OnInit {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

  constructor(private service: MatchUsersService) { }

  showInfoBoxes :any = {
    1:false, 
    2:false,
    3:false
  }
  password: any = '';
  selectedTypes : Array<any> = []

  ngOnInit(): void {
     
  }

  ngOnChanges(){
    if(this.editObjet){
      //this.getPenalties();
      this.setSelectedTypes();
      this.setshowInfoBoxes();
    }
  }

  
  setSelectedTypes(){
    let self = this;
    self.selectedTypes = [];
      this.editObjet.groups.forEach(function(element:any){
       // console.log(element.id);
        self.selectedTypes.push(element.id);
      });

    }
  setshowInfoBoxes(){
    this.showInfoBoxes = {
      '1': this.selectedTypes.includes('1'),
      '2': this.selectedTypes.includes('2'),
      '3': this.selectedTypes.includes('3')
    }
  }


  onCheckParameter(element:any){
    if(element.target.checked){
      this.selectedTypes.push(element.target.value);
    }else{
      let index = this.selectedTypes.findIndex(rank => rank === element.target.value);
      this.selectedTypes.splice(index, 1);
        
    }
    this.setshowInfoBoxes();
  }
  
  updateUser(){
    let sendobj = {
      "id": this.editObjet.id,
      "name": this.editObjet.name,
      "email": this.editObjet.email,
      "status": this.editObjet.status,
      "password": this.password,
      "types": this.selectedTypes,
    };
    if(this.editObjet.name != '' && this.editObjet.email != '' && this.selectedTypes.length != 0){
      this.service
          .updateUser(sendobj)
          .then( (response: any) => {
            if(response){
              Swal.fire({
                title: 'Success!',
                text: 'User Updated',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false
              });
              
              this.eventFinishEdit.emit();
            }
          }).catch((error: any) => {
            if(error){
              Swal.fire({
                title: 'Info!',
                text: 'Error on server',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false
              });
            }
          } );
    }else{
      Swal.fire({ 
        title: 'Info!',
        text: 'Name, email and UserGroups required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });

    }

  }
  cancelCreation(){
    this.eventFinishEdit.emit();
  }

}
