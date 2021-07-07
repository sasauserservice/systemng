import { Component, OnInit, ViewChild } from '@angular/core';
import { ParamsService } from '../../params.service';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

declare var UIkit: any;
@Component({
  selector: 'app-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss']
})
export class CategoryCreatorComponent implements OnInit {

  @ViewChild('modaledition') modaledition : any;

  constructor(private service: ParamsService , private servicecat: CategoryService) { }

  ngOnInit(): void {
    this.getParameters();
    this.getCategories();
  }
  public newCategory: any = {
    params:[]
  };
  public categoryList: Array<any> = [];
  public selectedParameters : Array<any> = [];
  public currentEdition     : any = {};

  public parameters : any = {};

  openEdit(obj: any){

    
    this.currentEdition = obj;
    this.selectedParameters = obj.paramsid;
    let modal = this.modaledition.nativeElement;
    UIkit.modal(modal).show();


  } 


  getParameters(){
    this.service
    .getParams()
    .subscribe( (response: any)=>{
      if(response){
        this.parameters = response.Data;
      }
    }, (error: any) => {
      if(error){
        console.log(error);
      }
    } );
  }

  onCheckParameter(element:any){
    if(element.target.checked){
      this.selectedParameters.push(element.target.value);
    }else{
      let index = this.selectedParameters.findIndex(rank => rank === element.target.value);
      this.selectedParameters.splice(index, 1);
       
    }

    this.newCategory.params = this.selectedParameters;
    
  }

  categoryCreator(){
    
    this.servicecat
    .sendCategory(this.newCategory)
    .then( (response: any) => {
      if(response){
        Swal.fire({
          title: 'Success!',
          text: 'You must write a term to search',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        });
        //this.getCategories();
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

  getCategories(){
    this.servicecat
    .getCategory()
    .subscribe( (response: any)=>{
      if(response){
        this.categoryList = response.Data;
      }
    }, (error: any) => {
      if(error){
        console.log(error);
      }
    } 
    );
  }

  deleteCategory(id:number){
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
        this.servicecat.deleteCategory(id).then((response: any) => {
          Swal.fire({
            title: 'Success!',
            text: 'Category deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.getCategories();
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
   // this.servicecat.deleteCategory(id).then().catch();
  }




  editCategory(){
    let obj = {
      id: this.currentEdition.id,
      title: this.currentEdition.title,
      description: this.currentEdition.description,
      params: this.selectedParameters,
    };
    this.servicecat
    .updateCategory(obj)
    .then( (response: any) => {
      if(response){
        Swal.fire({
          title: 'Success!',
          text: '',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        });
        //this.getCategories();
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

    this.getCategories();
  }






}
