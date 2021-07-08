import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ParamsService } from '../params.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit, OnChanges {

  constructor(private service: ParamsService) { }

  public Parameters: Array<any> = [];

  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  ngOnInit(): void {
    this.get();
  }

  ngOnChanges(){
    
    if(this.changes == 1){
      this.get();
      this.stateChange.emit(0);
    }
    
  }

  edit(edit: any){
    this.stateChangeBar.emit(2);
    this.currentEdit.emit(edit);
  }

  add(){
    this.stateChangeBar.emit(1);
  }

  get(){
    console.log("Hello change", this.changes);
    this
    .service
    .getParams()
    .subscribe( (response: any) => {
      this.Parameters = response.Data;
    }, (erro: any) => {
      console.error(erro);
    } );
  }

  del(id: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.service.deleteParam(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'Param deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.get();
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
