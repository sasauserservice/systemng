import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService:any;
  private currentSession: any;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession      = this.loadCurrentSession();
  }

  setCurrentSession(session:any){
    this.localStorageService.setItem("currentUser", JSON.stringify(session));
  }

  loadSessionData(){
    let sessionStr = this.localStorageService.getItem("currentUser");
    return ( sessionStr ) ? JSON.parse(sessionStr) : null;
  }

  loadCurrentSession(){
    return this.currentSession;
  }

  isAuthenticate(): boolean {
    return (this.loadSessionData() != null) ? true : false;
  }
}
