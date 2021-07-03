import { Component, OnInit , OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-backendelements',
  templateUrl: './backendelements.component.html',
  styleUrls: ['./backendelements.component.scss']
})
export class BackendelementsComponent implements OnInit, OnChanges {
  
  @Input() data  : Array<any> = [];
  @Input() alias : string     = '';
  @Input() grid  : number     = 0 ;
  
  @Input()  parendid : number = 0;

  @Output() asyncData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(): void {

  }

  dataAsinc(val:any){
    this.asyncData.emit(val);
  }

  changeContentOrder(index:number,up:boolean){
    //alert('index: '+index+'for up:  '+up);
    let aux = {}; 
    let newind = (up)?index --:index ++;
    aux = this.data[index];
    this.data[index] = this.data[newind]
    this.data[newind] = aux;

  }

  deletecontent(ind:number) {
    this.data.splice(ind, 1);
  };

}
