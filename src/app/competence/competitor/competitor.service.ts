import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BASEURI } from 'src/app/shared/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
  constructor(private Http: HttpClient) { }

  create(){
    
  }

  getCoptetitors() : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/competitor/list').pipe( catchError(this.handelError) );
  } 
  
  getCoach() : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/competitor/list/103').pipe( catchError(this.handelError) );
  } 
 
  deleteCoptetitor(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/competitor/delete/'+id, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  updateCoptetitor(data: any){
    let form = new FormData();
    form.append('form', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/competitor/update', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendCoptetitor(penalties:Array<any>){
    let vm = this;
    let form = new FormData(); 
    form.append('form',JSON.stringify(penalties));
    return new Promise((resolve, reject) => {
      vm.Http.post(BASEURI+'extdb/competitor/create', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    }); 
  }
  
  handelError(error: any){  
    console.log(error);
    return throwError(error.message || "Server Error");  
  } 
}
