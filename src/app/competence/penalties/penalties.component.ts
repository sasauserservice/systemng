import { Component, OnInit, ViewChild } from '@angular/core';
import { PenaltiesService } from '../penalties.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.scss']
})
export class PenaltiesComponent implements OnInit {

  @ViewChild('modaledition') modaledition : any;

  constructor(private service: PenaltiesService) { }

  ngOnInit(): void {
    this. getPenalties();
  }
  public penalties : Array<any> = [];
  public penaltiesList : Array<any> = [];

  public currentEdition : any = null;


  openEdit(obj: any){
    this.currentEdition = obj;
    let modal = this.modaledition.nativeElement;
    UIkit.modal(modal).show();
  }


  addPenalty(){
    this.penalties.push({
      title:'',
      json:{},
      points:0
    })
  }

  sendPenalties(){
    this.service.sendParams(this.penalties).then( (response: any) => {
        if(response){
          Swal.fire({
            title: 'Success!',
            text: 'Penalties saved',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.getPenalties();
          this.penalties = [];
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
    }

    update(){
      this.service
      .update(this.currentEdition)
      .then( (response: any) => {
        if(response){
          Swal.fire({
            title: 'Success!',
            text: 'You must write a term to search',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
           
          this.getPenalties();
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
    }




  getPenalties(){
    this.service.getPenalties().subscribe((response:any) => {
      //console.log(response);
      this.penaltiesList = response.Data;

    });
  }

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
