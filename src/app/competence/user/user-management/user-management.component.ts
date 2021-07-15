import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatchUsersService } from '../match-users.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  constructor(private service: MatchUsersService) { }

  usersShow : Array<any> = [];
  filterSelect: any = '';
  filterQuery: any = '';

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnChanges(){
    if(this.changes == 1){
      this.getUsers();
      this.stateChange.emit(0); 
    }
  }
  openEdit(edit:any){
    this.stateChangeBar.emit(10);
    this.currentEdit.emit(edit);
  } 

  getUsers(){
    this.service.getUsers().subscribe((response:any) => {
      console.log(response);
      this.usersShow = response;

    });
  }
  deleteUser(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteUser(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'User deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.getUsers();
        }).catch((error: any) => {
          Swal.fire({
            title: 'Info!',
            text: 'Error on server',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          });
        });
      }
    });

  }

  openCreateNew(){
    this.stateChangeBar.emit(9);
  }

}