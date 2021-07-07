import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

import { BASEURI } from 'src/app/shared/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {
  constructor(private http: HttpClient) { }

  upload(file: File, path: string, name: string) {
    const data : FormData = new FormData();
    data.append('file', file);
    data.append('dest', path);
    data.append('filename', name);

    const httpOptions = new HttpHeaders({
    });

    return this.http.post(BASEURI + "subirimagen", data, {
      reportProgress: false,
      withCredentials: false,
      headers:  httpOptions,
      responseType: 'json'
    }).pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
