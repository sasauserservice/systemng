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

  createMatchPost(title: string){
    return new Promise( (resolve, reject) => {
      let user = this.storage.loadSessionData();

      var data   = JSON.stringify({title: title, createdBy: user.Data.id,ft:false});   

      this.httpClient.post(BASEURI+'create-match', data).subscribe((done:any) => {
        resolve(done);
      }, (err:any) => {
        reject(err);
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
