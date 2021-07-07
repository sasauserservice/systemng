import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PexelsimagesService } from './pexelsimages.service';
import Swal from 'sweetalert2';
import { ImagesmanagerService } from '../imagesmanager/imagesmanager.service';

@Component({
  selector: 'app-pexelsimages',
  templateUrl: './pexelsimages.component.html',
  styleUrls: ['./pexelsimages.component.scss']
})
export class PexelsimagesComponent implements OnInit {

  /**Attributes**/

  @Input() apiKey: string = '';

  @Output() receiveImages  = new EventEmitter<any>();

  /**Props**/
  public termQuery : string = '';
  public pageQuery : number = 1;
  public totalResult: number = 0;
  public totalPages: number = 1;

  public pagination: Array<any> = [];
  public visiblepages: number = 7;
  public startpage : number = 1;
  public endpage : number = 6;
  public imagesRecived : Array<any> = [];

  public stateLoading : number = 0;

  constructor(private PexelsServ: PexelsimagesService, private imagesmanagerService: ImagesmanagerService) { }

  ngOnInit(): void {
  }

  selectPhoto(uri: any){

    this.receiveImages.emit(uri);
    
    Swal.fire({
      title: 'Info!',
      text: 'Photo selected',
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false
    });
  }

  doPaging(current:number, {range=6, pages = 0, start = 1}) {
    const paging = []; 
    var i = Math.min(pages + start - range, Math.max(start, current - (range / 2 | 0)));
    const end = i + range;
    while (i < end) { 
      let pa = i++;
      paging.push({title: pa, page: pa}); 
    }
    return paging;
  }

  makePagination(){
    this.pagination = [];
    let i = this.pageQuery;
    const paging = {range: this.visiblepages, pages: this.totalPages}
    this.pagination = this.doPaging(i, paging);
  }

  goToPage(page:number){
    this.stateLoading = 1;
    this.imagesRecived = [];
    this.pageQuery = page;
    this.PexelsServ.getImageByTerm(this.termQuery, this.pageQuery, this.apiKey)
    .subscribe( (response: any) => {
      console.log(response);
      this.imagesRecived = response.photos;
      this.totalResult = response.total_results;
      this.pageQuery = response.page;
      this.totalPages = Math.ceil(this.totalResult / response.per_page);
      this.makePagination();
      this.stateLoading = 3;
    }, (error: any) => {
      console.log(error);
    } );
  }

  searchGo() : any{
    if(this.termQuery.trim() == ''){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a term to search',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
      return false;
    }

    this.stateLoading = 1;
    this.imagesRecived = [];
    this.PexelsServ.getImageByTerm(this.termQuery, this.pageQuery, this.apiKey)
    .subscribe( (response: any) => {

      this.imagesRecived = response.photos;
      this.totalResult = response.total_results;
      this.pageQuery = response.page;
      this.totalPages = Math.ceil(this.totalResult / response.per_page);
      this.makePagination();
      this.stateLoading = 3;
    }, (error: any) => {
      console.log(error);
    } );
  }

}
