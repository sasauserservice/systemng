import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private Http: HttpClient) { }
  getRanking(eventId:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/ranking/preview/'+eventId).pipe( catchError(this.handelError) );
  } 
  
  handelError(error: any){  
    console.log(error);
    return throwError(error.message || "Server Error");  
  } 

} 