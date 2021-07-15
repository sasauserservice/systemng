import { Injectable } from '@angular/core';
import { BASEURI } from 'src/app/shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private httpClient: HttpClient) { }

  getPanels(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'matchpanel/list')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }

  getMatchToSelect2(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'matchpanel/events')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }

  getJudgesToSelect2(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'extdb/community/group/judge')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
  
  getCategoriesToSelect2(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'matchpanel/categories')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
  
  getParamsToselect(group:any){
    let ids = JSON.stringify(group);
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'matchpanel/params/'+ids)
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
  
  getPenaltiesToselect(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get<any>(BASEURI + 'matchpanel/penalties')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
  
  async getPenaltiesOnSelection(){
    let data = await this.httpClient.get<any>(BASEURI + 'matchpanel/penalties').toPromise();
    return data;
  }

  postPanel($data: any) {
    let form = new FormData();
    form.append('form', JSON.stringify($data));
    return new Promise( (resolve, reject) => {
      this.httpClient
      .post<any>(BASEURI + 'matchpanel/create', form)
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }

  updatePanel($data: any){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const form = new FormData();
    form.append('form', JSON.stringify($data));
    return new Promise( (resolve, reject) => {
      this.httpClient
      .post<any>(BASEURI + 'matchpanel/update', form)
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }

  delpanel($id:any){
    const form = new FormData();
    return new Promise( (resolve, reject) => {
      this.httpClient
      .post<any>(BASEURI + 'matchpanel/delete/'+$id, form)
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
}
