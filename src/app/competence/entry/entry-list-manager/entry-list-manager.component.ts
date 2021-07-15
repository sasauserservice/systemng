import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../entry.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-entry-list-manager',
  templateUrl: './entry-list-manager.component.html',
  styleUrls: ['./entry-list-manager.component.scss']
})
export class EntryListManagerComponent implements OnInit {

  constructor(private service:EntryService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getEntrys();
  }


  eventsSelect  :   Array<any> = [];
  eventselected :   any={};
  allEntrys     :   Array<any> = [];

  getEvents(){
    this.service.getEvents().then((response:any) => {
     // console.log(response);
      this.eventsSelect = response;

    });
  }

  getEntrys(){
    this.service.getParticipations().then((response:any) => {
     // console.log(response);
      this.allEntrys = response;

    });
  } 

}
 