import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ParagrapElement } from 'src/app/shared/paragrap-element.model';


@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrls: ['./parrafos.component.scss']
})
export class ParrafosComponent implements OnInit {

  @Output() parrafosContent = new EventEmitter<any>();
  @Input()  alias : any = '';

  public parrafos : any[] = [];

  public title : string = '';

  public id : number = 0;

  public grid : number = 0;

  public gridclass : object ={
    'uk-width-1-1':(this.grid == 0),
    'uk-width-1-2':(this.grid == 1),
    'uk-width-1-3':(this.grid == 2)
  };
  Objngwidth(){
    this.gridclass = {
      'uk-width-1-1':(this.grid == 0),
      'uk-width-1-2':(this.grid == 1),
      'uk-width-1-2 uk-w':(this.grid == 2)
    };
  }
  
  cambiarGrid(parrafo: any){
    if(parrafo.grid == 0){
      parrafo.grid = 1;
    }else if(parrafo.grid == 1){
      parrafo.grid = 2
    }else if(parrafo.grid == 2){
      parrafo.grid = 0
    }
    this.updateAsync();
  }
  

  constructor(private Content : ContentService) { }

  ngOnInit(): void {
  }

  updateAsync(){
    this.parrafosContent.emit(this.parrafos);
  }

  changeOrder(index:number,up:boolean){
    let aux = {};
    let newind = (up)?index --:index ++;
    aux = this.parrafos[index];
    this.parrafos[index] = this.parrafos[newind]
    this.parrafos[newind] = aux;
    this.updateAsync();
  }

  deleteparrafo(ind:number) {
    this.parrafos.splice(ind, 1);
    this.updateAsync();
  };

  addElement(type:string,index:number){
    
    this.parrafos[index].content.push({
      type:type,
      attrs: {
        src: ''
      }
    });
  
    this.updateAsync();
  }
  
  addParrafo(){
    this.parrafos.push({
      titulo:'',
      style: 4,
      grid: 0,
      content:[],
      components:[]
    });
    this.updateAsync();
  }
  
  changeStyle(parr:any){
    if( parr.style == 1){
      parr.style = 2
    }else if( parr.style == 2){
      parr.style = 3
    }else if( parr.style == 3){
      parr.style = 4
    }else if( parr.style == 4){
      parr.style = 1
    }
    this.updateAsync();
  }

}
