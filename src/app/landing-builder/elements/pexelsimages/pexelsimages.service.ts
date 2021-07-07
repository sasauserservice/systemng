import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { PEXELSURI, MEMORYTRANSLATE } from 'src/app/shared/enviroment';

@Injectable({
  providedIn: 'root'
})

export class PexelsimagesService {

  constructor(private http: HttpClient) { }

  getImageByTerm(searchTerm: string, searchPage: number, searchApikey: string) : Observable<any>
  {
    return this.http
    .get<any>(PEXELSURI, {
      headers: {
        'Authorization': searchApikey,
      },
      params: {
        page: searchPage,
        query: searchTerm,
        per_page: 16
      }
    }).pipe( catchError(this.handelError) );
  }

  handelError(error: any){  
    return throwError(error.message || "Server Error");  
  } 

}
