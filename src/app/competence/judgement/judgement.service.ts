import { Injectable } from '@angular/core';
import { BASEURI } from '../../shared/enviroment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JudgementService {

  constructor(private Http: HttpClient) { }

  getGeneralJudgmentParams(part:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/asigmentsToJudge/general/'+part).pipe( catchError(this.handelError) );
  }

  getPenaltyJudgmentParams(part:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/asigmentsToJudge/penalty/'+part).pipe( catchError(this.handelError) );
  }

  //TRAER DATA ESPECIFICA QUE LE CORRESPONDE AL JUEZZ 1.0 MARTES 27/07
  getJudgeSpec(entryid:any){
    return this.Http.get<any>(BASEURI+'extdb/juzging/judgeasigmentsbyentry/'+entryid).pipe( catchError(this.handelError) );
  }
 
  
  getMainjudge(part:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/toolsmain/'+part).pipe( catchError(this.handelError) );
  }
  
  getAtlete(part:any) : Observable<any> {
    return this.Http.get<any>(BASEURI+'extdb/juzging/toolsathlete/'+part).pipe( catchError(this.handelError) );
  }
  
  sendGenerals(formd: any){
    let form = new FormData();
    form.append('form', JSON.stringify(formd));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'extdb/juzging/score/general/save', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendPenalties(formd: any){
    let form = new FormData();
    form.append('form', JSON.stringify(formd));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'extdb/juzging/score/penalty/save', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  sendMain(formd: any){
    let form = new FormData();
    form.append('form', JSON.stringify(formd));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'extdb/juzging/toolsmain/save', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

    
  handelError(error: any){  
    console.log(error);
    return throwError(error.message || "Server Error");  
  } 


  athleteUpdateStateAcceptation(entry: any){
    let form = new FormData();
    form.append('form', JSON.stringify({
      "entryid": entry
    }));
    return new Promise((resolve, reject) => {
      this.Http.post(BASEURI+'extdb/juzging/athlete/approve', form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }





}
