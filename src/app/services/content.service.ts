import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURI } from '../shared/enviroment';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) { }


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


  getArticles(){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get(BASEURI + 'allarticle')
      .subscribe( (response:any) => {
        resolve(response);
      }, (error:any) => {
        reject(error);
      } );
    } );
  }
 
  createMatchPost(title: string,type:number){
    return new Promise( (resolve, reject) => {
      let user = this.storage.loadSessionData();

      var data   = JSON.stringify({title: title, createdBy: 1, type:type});   

      this.httpClient.post(BASEURI+'create-match', data).subscribe((done:any) => {
        resolve(done);
      }, (err:any) => {
        reject(err);
      });

    });
  }

  deleteArticle(id: any){
    let data = new FormData();
    return new Promise<any>((resolve, reject) =>{
      this.httpClient.post(BASEURI+'delete-event/'+id, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  eventReleaseScores(id: any){
     let ev = {
      "event":id
     }
    let data = new FormData();
    data.append("form",JSON.stringify(ev)) 
    return new Promise<any>((resolve, reject) =>{
      this.httpClient.post(BASEURI+'extdb/juzging/toolsmain/savemasive', data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  createpost(title: string){
    return new Promise( (resolve, reject) => {
      let user = this.storage.loadSessionData();

      var data   = JSON.stringify({title: title, createdBy: user.Data.id});   

      this.httpClient.post(BASEURI+'create', data).subscribe((done:any) => {
        resolve(done);
      }, (err:any) => {
        reject(err);
      });

    });
  }

  updatepost(id: any, fulltext: any){
    return new Promise( (resolve, reject) => {
      let data = JSON.stringify(fulltext);
      this.httpClient.post(BASEURI+"content/update/"+id, data)
      .subscribe((done:any) => {
        resolve(done);
      }, (err:any) => {
        reject(err);
      });
    });
  }

  getArticle(alias: string){
    return new Promise( (resolve, reject) => {
      this.httpClient
      .get(BASEURI+'find/'+alias)
      .subscribe( (resp:any) => {
        resolve(resp);
      }, (error: any) => {
        reject(error);
      } );
    } );
  }
}
