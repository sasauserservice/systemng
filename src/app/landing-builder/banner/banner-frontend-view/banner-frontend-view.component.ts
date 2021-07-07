import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-banner-frontend-view',
  templateUrl: './banner-frontend-view.component.html',
  styleUrls: ['./banner-frontend-view.component.scss']
})
export class BannerFrontendViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image      : any = '';
  @Input() bannerType : number = 0;
  @Input() attrs      : any = {};



  

}
