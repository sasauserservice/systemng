import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videodisplay',
  templateUrl: './videodisplay.component.html',
  styleUrls: ['./videodisplay.component.scss']
})
export class VideodisplayComponent implements OnInit {

  @Input() videodata : any = {};

  constructor() { }

  ngOnInit(): void {
    if( !this.videodata.hasOwnProperty('id') ){
      this.videodata = {
        id: null,
        type: null,
        image: {}
      };
    }
  }



}
