import { Component, OnInit, OnChanges, ViewChild} from '@angular/core';
import { ParamsService } from '../params.service';
import Swal from 'sweetalert2';

declare var UIkit: any;

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit, OnChanges {

  @ViewChild('modaledition') modaledition : any;

  constructor(private service: ParamsService) { }

  ngOnInit(): void {
    this.find();
  }

  ngOnChanges(){

  }

  public paramTitle : string = '';
  public paramDesc  : string = '';
  public criterias  : any[] = [];
  public params     : any[] = [];

  public currentEdition : any = null;

  openEdit(obj: any){
    let p = Object.assign({}, obj);
    this.currentEdition = p;
    let modal = this.modaledition.nativeElement;
    UIkit.modal(modal).show();
  }

  addCriteria(){
    let a = {
      title:'',
      points: 0
    };
    this.criterias.push(a);
  }

  pushParaEdit(){
    this.currentEdition.criteria.push({
      title: '',
      points: 0
    });
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
        this.paramTitle = '';
        this.paramDesc = '';
        this.criterias = [];
        this.find();
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

  spliceParaEdit(index: any){
    this.currentEdition.criteria.splice(index, 1);
  }
  
  spliceParaCrear(index: any){
    this.criterias.splice(index, 1);
  }

  sendForm(){
    this.service
    .sendParams(this.paramTitle, this.paramDesc, this.criterias)
    .then( (response: any) => {
      if(response){
        Swal.fire({
          title: 'Success!',
          text: 'You must write a term to search',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        });
        this.paramTitle = '';
        this.paramDesc = '';
        this.criterias = [];
        this.find();
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

  delParam(id: any) {
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
        this.service.deleteParam(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'Param deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.find();
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

  find(){
    this.service
    .getParams()
    .subscribe( (response: any)=>{
      if(response){
        this.params = response.Data;
      }
    }, (error: any) => {
      if(error){
        console.log(error);
      }
    } );
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
