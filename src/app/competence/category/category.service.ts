import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private Http: HttpClient) { }

  updateCategory(criterias:any){
    let form = new FormData();
     
    form.append('newcategory', JSON.stringify(criterias));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'match/category/update', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }
  
  deleteCategory(category: any){
    let form = new FormData();
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'match/category/delete/'+category, form).subscribe((response: any) => {
        resolve(response);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  sendCategory(criterias:any){
    let form = new FormData();
     
    form.append('newcategory', JSON.stringify(criterias));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'match/category/add', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  getCategory() : Observable<any> {
    return this.Http.get<any>(BASEURI+'match/category/list').pipe( catchError(this.handelError) );
  }
  
  handelError(error: any){  
    return throwError(error.message || "Server Error");  
  } 
}
  