import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CompetitorService } from '../competitor.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss']
})
export class CompetitorListComponent implements OnInit {

  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  constructor(private service: CompetitorService) { }

  ngOnInit(): void {
    this.getCompetitors();
  }
  competitors : Array<any> = [];
 
  ngOnChanges(){
    if(this.changes == 1){
      this.getCompetitors();
      this.stateChange.emit(0); 
    }
  }

  openCreateNew(){
    this.stateChangeBar.emit(11);
  }
  
  // para traer los competidores
  getCompetitors(){
   this.service.getCoptetitors().subscribe((response:any) => {
      this.competitors = response;
    });
  }

  openEdit(edit: any){
    this.stateChangeBar.emit(12);
    this.currentEdit.emit(edit);
  } 

  deleteUser(id: any){
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
        this.service.deleteCoptetitor(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'User deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.getCompetitors();
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

}
