import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleimagesService {

  constructor(private http: HttpClient) { }

  getData(uri: any) : Observable<any> {
    return this.http.get<any>(uri).pipe( catchError(this.handelError) );
  }

  handelError(error: any){  
    return throwError(error.message || "Server Error");  
  } 

}
