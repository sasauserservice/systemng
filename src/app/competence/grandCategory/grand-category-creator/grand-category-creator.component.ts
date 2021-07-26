import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ParamsService } from '../../params.service';
import { GrandCategoryService } from '../grand-category.service';
import Swal from 'sweetalert2';

declare var UIkit: any;
@Component({
  selector: 'app-grand-category-creator',
  templateUrl: './grand-category-creator.component.html',
  styleUrls: ['./grand-category-creator.component.scss']
})
export class GrandCategoryCreatorComponent implements OnInit {

  constructor(private servicecat: GrandCategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  categoriesAll : Array<any> = []
  categoriesAviable : Array<any> = []
  categoriesSelected : Array<any> = []

  newGrandCategory : any = {}

  getAllCategories(){
    this.servicecat.getCategory().subscribe((response:any)=>{
      this.categoriesAll = response.Data
    },(error:any)=>{

    })
  }

  onCheckParameter(element:any){
    if(element.target.checked){
      this.categoriesSelected.push(element.target.value);
    }else{
      let index = this.categoriesSelected.findIndex(rank => rank === element.target.value);
      this.categoriesSelected.splice(index, 1);
       
    } 

    this.newGrandCategory.categories = this.categoriesSelected;
    
  }

  categoryCreator(){

    if(this.newGrandCategory.title != ''){
      this.servicecat
    .sendCategory(this.newGrandCategory)
    .then( (response: any) => {
      if(response){
        Swal.fire({
          title: 'Success!',
          text: '',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        });
        //this.eventFinishCreate.emit();
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
        text: 'Title and description required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });

    }
    
    

  }



}
