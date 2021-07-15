import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({ 
  providedIn: 'root'
})
export class CompetenceLandingService {

  constructor(private Http: HttpClient) { }

  getAllCategories(id:number){
    return this.Http.get<any>(BASEURI+'extdb/categories/event/'+id).pipe( catchError(this.handelError) );}

  getAllProfiles(){
    return this.Http.get<any>(BASEURI+'extdb/competitor/list').pipe( catchError(this.handelError) );
  }
  getAllPart(id:number){
    return this.Http.get<any>(BASEURI+'extdb/list/'+id).pipe( catchError(this.handelError) );
  }
  sendParts(data: any,){
    let form = new FormData();
    form.append('form', data);
     
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'extdb/create', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }
  
  updatePart(data: any){
    let form = new FormData();
    form.append('form', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/update', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  deletePart(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/deleteparticipation/'+id, data)
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
