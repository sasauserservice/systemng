import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURI } from '../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ProcessHttpmsgService } from '../shared/process-httpmsg.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getdata(){
    return new Promise( (resolve, reject) => {
      this.httpClient.get(BASEURI + "getData").subscribe( (done: any) => {
        resolve(done);
      }, (error:any) =>{
        reject(error);
      } );
    } );
  }

  authenticateUser(email:string, pass:string){
    let credentials : object = {
      email: email,
      password: pass
    };

    return new Promise( (resolve, reject) => {

      let data = new FormData();   
      data.append('form', JSON.stringify(credentials));
      this.httpClient.post(BASEURI+'auth/initapp', data).subscribe((done:any) => {
        resolve(done);
      }, (err:any) => {
        reject(err);
      });

    });
  }

}
