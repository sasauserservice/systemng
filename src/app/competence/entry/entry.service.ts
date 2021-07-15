import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private Http: HttpClient) { }

  getEvents(){
    return new Promise( (resolve, reject) => {
      this.Http
      .get<any>(BASEURI + 'extdb/eventstongselect')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
  getParticipations(){
    return new Promise( (resolve, reject) => {
      this.Http
      .get<any>(BASEURI + 'extdb/participations')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
}
