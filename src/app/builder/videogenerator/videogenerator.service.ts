import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogeneratorService {
  
  constructor(private http: HttpClient) { }

  getImageYoutube(id:string){

    return {
			"small" : 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg',
			"big"   : 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg'
		};

  }

  getImageVimeo(id:string){
    return new Promise( (resolve, reject) => {
      this.http.get("https://vimeo.com/api/v2/video/"+ id +".json").subscribe( (done: any)=>{
        resolve(done);
      }, (error: any)=>{
        reject(error);
      } );
    } );
  }

  getProvider(url: any){
    let type : string = '';
    if(url.trim() != ""){
        url.match(/(http:|https:|)\/\/(player.|www.|m.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
        if (RegExp.$3.indexOf('youtu') > -1) {
          type = 'youtube';
        } else if (RegExp.$3.indexOf('vimeo') > -1) {
          type = 'vimeo';
        }
        return {
          type: type,
          id: RegExp.$6
        };
    } else {
      return false;
    }
  }
}
