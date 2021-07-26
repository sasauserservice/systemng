import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURI } from '../shared/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  groupsOfUser : any;

  constructor(private httpClient: HttpClient) {
    
  }

  fetchApplicationData(){
    return new Promise((resolve, reject)=>{
      this.httpClient.get(BASEURI+'site/applicationdata').subscribe((response:any)=>{
        resolve(response);
      }, (error:any)=>{
        reject(error);
      });
    });
  }
}
