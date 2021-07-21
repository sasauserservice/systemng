import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
 
  constructor(private Http: HttpClient) { }
  postOninitNewCase(data: any){
    let form = new FormData();
    form.append('form', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/juzging/claims/newcase', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  } 
  postNewMessage(data: any){
    let form = new FormData();
    form.append('form', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/juzging/claims/newmessage', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  } 

  getAllCases() : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/claims/allcases').pipe( catchError(this.handelError) );
  } 

  getCasebyId(id:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/claims/case/'+id).pipe( catchError(this.handelError) );
  } 

  handelError(error: any){  
    console.log(error);
    return throwError(error.message || "Server Error");  
  }   
  

}
 