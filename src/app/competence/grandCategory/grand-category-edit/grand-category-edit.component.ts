import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { GrandCategoryService } from '../grand-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grand-category-edit',
  templateUrl: './grand-category-edit.component.html',
  styleUrls: ['./grand-category-edit.component.scss']
})
export class GrandCategoryEditComponent implements OnInit {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

 

  constructor(private servicecat: GrandCategoryService) { }

  selectedParameters : Array<any> = [];
  currentEdition     : any = {};

  public categoriesAll : any = [];
  newGrandCategory : any = [];
  categoriesSelected : any = [];

  ngOnInit(): void {
    this.getAllCategories()
    this.categoriesSelected = this.editObjet.categoriesIds

    this.editObjet.data = JSON.parse(this.editObjet.data)
  }


  getAllCategories(){
    this.servicecat.getCategory().subscribe((response:any)=>{
      this.categoriesAll = response.Data
    },(error:any)=>{

    })
  }

  onCheckParameter(element:any){
    if(element.target.checked){
      this.categoriesSelected.push(element.target.value)
    }else{
      let index = this.categoriesSelected.findIndex((rank:any) => rank === element.target.value)
      this.categoriesSelected.splice(index, 1)
       
    } 
    this.newGrandCategory.categories = this.categoriesSelected
  }
  editCategory(){
    let obj = {
      id: this.editObjet.id,
      title: this.editObjet.title,
      data: JSON.stringify(this.editObjet.data),
      cats: this.categoriesSelected,
    };
    console.log(obj)

    if(obj.title != ''){
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
        text: 'Title required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }
  }

}
