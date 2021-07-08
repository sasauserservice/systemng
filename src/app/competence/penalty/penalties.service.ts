import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';@Injectable({
  providedIn: 'root'
})  
export class PenaltiesService {

  constructor(private Http: HttpClient) { }

  getPenalties() : Observable<any> {
    return this.Http.get<any>(BASEURI+'match/get/penalty').pipe( catchError(this.handelError) );
  } 

  deletePenalty(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'match/delete/penalty/'+id, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  update(data: any){
    let form = new FormData();
    form.append('parametro', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'match/update/penalty', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendParams(penalties:Array<any>){
    let vm = this;
    let form = new FormData(); 
    form.append('penalties',JSON.stringify(penalties));
    return new Promise((resolve, reject) => {
      vm.Http.post(BASEURI+'match/addpenalty', form)
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
 