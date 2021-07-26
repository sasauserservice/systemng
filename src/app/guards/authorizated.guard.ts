import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService, private cookieService: CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const cookieAuth = this.cookieService.get('platformauth');
      
      if(cookieAuth){
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }      
  }
  
}
