import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GOOGLESEARCH, GOOGLE_GKEY, GOOGLE_GCX } from 'src/app/shared/enviroment';
import Swal from 'sweetalert2';
import { ImagesmanagerService } from '../imagesmanager/imagesmanager.service';
import { GoogleimagesService } from './googleimages.service';

@Component({
  selector: 'app-googleimages',
  templateUrl: './googleimages.component.html',
  styleUrls: ['./googleimages.component.scss']
})
export class GoogleimagesComponent implements OnInit {

  public stateLoading : number = 0;
  public query : string = '';
  private uriQuery : string = '';
  public startIndex : number = 1;
  public pageQuery : number = 1;
  public totalResults: number = 0;
  public totalPages : number = 1;
  public pagination : Array<any> = [];

  public receivedImages : Array<any> = [];

  public visiblepages : number = 7;

  /**OUTPUTS TO EXTERNALS COMPONENTS**/
  @Output() receiveImage = new EventEmitter<any>();
  /**OUTPUTS TO EXTERNALS COMPONENTS**/

  constructor(private GoogleSearchServ: GoogleimagesService, public ImagesManagerServ: ImagesmanagerService) {
  }

  ngOnInit(): void {
    
  }

  selectPhoto(uri: any){
    this.ImagesManagerServ.uri = uri;
    this.receiveImage.emit(uri);
    Swal.fire({
      title: 'OK!',
      text: 'Photo selected',
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false
    });
  }

  makeUri(){
    this.uriQuery = GOOGLESEARCH+"?key="+GOOGLE_GKEY+"&cx="+GOOGLE_GCX+"&q="+this.query+"&searchType=image&imgSize=xlarge&alt=json&safe=active&start="+this.startIndex;
  }

  getStartByPage(page: number) : number {
    return this.pagination[page-1].start;
  }

  doPaging(current:number, {range=6, pages = 0, start = 1}) {
    const paging = []; 
    var i = Math.min(pages + start - range, Math.max(start, current - (range / 2 | 0)));
    const end = i + range;
    while (i < end) { 
      let pa = i++;
      let start = (i == 1) ? 1 : ((i-1)*10 - 10 + 1);
      paging.push({title: pa, page: pa, start: start }); 
    }
    return paging;
  }

  makePagination(){
    this.pagination = [];
    let i = this.pageQuery;
    const paging = {range: this.visiblepages, pages: this.totalPages}
    this.pagination = this.doPaging(i, paging);
  }

  doSearch(){
    this.stateLoading = 1;
    this.receivedImages = [];
    this.GoogleSearchServ
    .getData(this.uriQuery)
    .subscribe( (response: any) => {
      console.log(response);
      this.totalResults = parseInt(response.queries.request[0].totalResults);
      this.totalPages  = Math.ceil(this.totalResults / response.queries.request[0].count);
      this.receivedImages = response.items || [];
      this.stateLoading = 3;
      this.makePagination();
    }, (err: any) => {
      console.log(err);
    } );
  }

  goToPage(page:number, start:number){
    this.pageQuery = page;
    this.startIndex = start;
    this.makeUri();
    this.doSearch();
  }

  searchGo() : any {
    if(this.query.trim() == ''){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a term to search',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
      return false;
    }

    this.makeUri();
    this.doSearch();


  }

}
