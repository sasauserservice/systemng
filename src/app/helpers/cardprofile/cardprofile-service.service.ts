import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CardprofileServiceService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  async getDataConnected(){
    const cookieAuth = this.cookieService.get('platformauth');
    const response = await this.httpClient.get<any>(BASEURI+'auth/authenticate').toPromise();
    return response;
  }

}
