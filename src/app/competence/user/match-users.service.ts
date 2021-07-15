import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchUsersService {

  constructor(private Http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/community/list').pipe( catchError(this.handelError) );
  } 
 
  deleteUser(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/community/delete-user/'+id, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  updateUser(data: any){
    let form = new FormData();
    form.append('form', JSON.stringify(data));
    return new Promise<any>((resolve, reject) =>{
      this.Http.post(BASEURI+'extdb/community/update-user', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendUser(penalties:Array<any>){
    let vm = this;
    let form = new FormData(); 
    form.append('form',JSON.stringify(penalties));
    return new Promise((resolve, reject) => {
      vm.Http.post(BASEURI+'extdb/community/create-user', form)
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
     