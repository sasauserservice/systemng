import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenthead',
  templateUrl: './contenthead.component.html',
  styleUrls: ['./contenthead.component.scss']
})
export class ContentheadComponent implements OnInit {

  @Input() arrayDatos : any = [];

  @Input() current : any = {};
  @Input() position : any = 0;
  @Output() syncData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changePosition(up: boolean = true){ 
    let aux = {}; 
    let newind = (up)?this.position --:this.position ++;
    aux = this.arrayDatos[this.position];
    this.arrayDatos[this.position] = this.arrayDatos[newind]
    this.arrayDatos[newind] = aux;
    this.syncData.emit(this.arrayDatos)
  }


  deletecontent(ind:number) {
    this.arrayDatos.splice(ind, 1);
    this.syncData.emit(this.arrayDatos)
  };

}
