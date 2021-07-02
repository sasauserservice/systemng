import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image-parrafo',
  templateUrl: './image-parrafo.component.html',
  styleUrls: ['./image-parrafo.component.scss']
})
export class ImageParrafoComponent implements OnInit {


  public imagen : any = '';

  constructor() { }

  ngOnInit(): void {
  }

  public frame  : number = 0;
  public border : number = 0;
  public pos    : number = 0;


  changePos(){
    switch(this.pos){
      
      
      case 0:
        this.pos = 2
      break;  
      case 2:
        this.pos = 1
      break;
      case 1:
        this.pos = 0
      break; 

    }
  }
  changeBorder(){
    switch(this.border){
      
      
      case 0:
        this.border = 2
      break;  
      case 2:
        this.border = 1
      break;
      case 1:
        this.border = 0
      break; 

    }
  }
  changeFrame(){
    switch(this.frame){
      
      
      case 0:
        this.frame = 2
      break;  
      case 2:
        this.frame = 1
      break;
      case 1:
        this.frame = 0
      break; 

    }
  }
 

  @Input() identity : string = '';
  @Input() path     : string = '';

  @Input() alias   : string = "";
  @Input() parentid   : number = 0; 

   // outputs 
   @Input() contenido : Array<any> = [];
   @Input() attr : object = {};
   @Input() position : any = 0;

   @Output() target  = new EventEmitter<any>();
 
   @Output() asyncData = new EventEmitter<any>();
   // outputs  
   
  sincronizar(val:any){
     this.asyncData.emit(val);
   }


   emitTarget(val: any){
     this.target.emit(val);
     this.imagen = val;
   }
  


}
