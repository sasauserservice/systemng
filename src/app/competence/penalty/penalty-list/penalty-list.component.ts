import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PenaltiesService } from '../penalties.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-penalty-list',
  templateUrl: './penalty-list.component.html',
  styleUrls: ['./penalty-list.component.scss']
})
export class PenaltyListComponent implements OnInit {

  constructor(private service: PenaltiesService) { }

  ngOnInit(): void {
    this. getPenalties();
  }
  public penalties : Array<any> = [];
  public penaltiesList : Array<any> = [];

  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  ngOnChanges(){
    
    if(this.changes == 1){
      this.getPenalties();
      this.stateChange.emit(0);
    }
    
  }

  openCreateNew(){
    this.stateChangeBar.emit(3);
  }

  openEdit(edit:any){
    this.stateChangeBar.emit(4);
    this.currentEdit.emit(edit);
  }

  getPenalties(){
    this.service.getPenalties().subscribe((response:any) => {
      //console.log(response);
      this.penaltiesList = response.Data;

    });
  }

  // Eliminar Penalty
  deletePenalty(id:number){
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
        this.service.deletePenalty(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'Penalty deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.getPenalties();
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
