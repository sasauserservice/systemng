import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { ParamsService } from '../../params.service';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

declare var UIkit: any;
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public categoryList: Array<any> = [];

  public searchTerm : string = '';

  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  constructor(private service: ParamsService , private servicecat: CategoryService) { } 

  ngOnChanges(){
    
    if(this.changes == 1){
      this.getCategories(); 
      this.stateChange.emit(0);
    }
    
  }
 
  ngOnInit(): void {
    //this.getCategories();
    
  }
  openEdit(edit:any){
    this.stateChangeBar.emit(6);
    this.currentEdit.emit(edit);
  }

  add(){
    this.stateChangeBar.emit(5);
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

}
