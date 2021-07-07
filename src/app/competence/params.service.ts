import { Injectable } from '@angular/core';
import { BASEURI } from '../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor(private Http: HttpClient) { }

  getParams() : Observable<any> {
    return this.Http.get<any>(BASEURI+'match/get/param').pipe( catchError(this.handelError) );
  }

  update(data: any){
    let form = new FormData();
    form.append('parametro', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'match/update/param', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  deleteParam(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'match/delete/param/'+id, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendParams(title: string, description: string, criterias: Array<any>){
    let form = new FormData();
    form.append('title', title);
    form.append('description', description);
    form.append('criterias', JSON.stringify(criterias));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'match/add/param', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  handelError(error: any){  
    return throwError(error.message || "Server Error");  
  } 
}
