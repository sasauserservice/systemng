import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-editable-view',
  templateUrl: './banner-editable-view.component.html',
  styleUrls: ['./banner-editable-view.component.scss']
})
export class BannerEditableViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public diagramType : number = 0;

  changediagramType(){
    switch (this.diagramType) {
      case 0:
        this.diagramType = 1
      break;
      case 1:
        this.diagramType = 2
      break;
      case 2:
        this.diagramType = 3
      break;
      case 3:
        this.diagramType = 0
      break;
    }
  }



}
 