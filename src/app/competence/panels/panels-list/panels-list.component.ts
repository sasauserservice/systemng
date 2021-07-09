import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-panels-list',
  templateUrl: './panels-list.component.html',
  styleUrls: ['./panels-list.component.scss']
})
export class PanelsListComponent implements OnInit {

  @Input()  changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  new(){
    this.stateChangeBar.emit(7);
  }

}
