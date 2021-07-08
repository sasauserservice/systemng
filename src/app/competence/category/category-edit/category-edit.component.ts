import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ParamsService } from '../../params.service';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit, OnChanges {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

  public selectedParameters : Array<any> = [];
  public currentEdition     : any = {};

  public parameters : any = [];

  constructor(private service: ParamsService, private servicecat: CategoryService) { }

  ngOnInit(): void {
    this.getParameters();    
    this.selectedParameters = this.editObjet.paramsid;
  }

  ngOnChanges(){
    this.selectedParameters = this.editObjet.paramsid;
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

    //this.newCategory.params = this.selectedParameters;
    
  }
  

  editCategory(){
    let obj = {
      id: this.editObjet.id,
      title: this.editObjet.title,
      description: this.editObjet.description,
      params: this.selectedParameters,
    };

    if(obj.title != '' && obj.description != ''){
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
        text: 'Title and description required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }

    



  }


}
