import { Component, OnInit ,Input, ViewChild, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-textinsert',
  templateUrl: './textinsert.component.html',
  styleUrls: ['./textinsert.component.scss']
})
export class TextinsertComponent implements OnInit {
  @Input() contenido : Array<any> = [];
  @Input() attr : object = {};
  @Input() position : any = 0;

  @Output() asyncData = new EventEmitter<any>();


  @ViewChild('textarepa') textareaPa : any;
  @ViewChild('divtex') textoPre    : any;
  
  public text :string = '';
  public size : number = 0;
  public bold : boolean = false;
  public align: number = 0;

  changeBold(){
    if(this.bold){
      this.bold = false;
    }else{
      this.bold =  true;
    }
  }

  sincronizar(val:any){
    this.asyncData.emit(val);
  }
 
  onFocusOutEvent(event:any){
    console.log(event);

    event.target.classList.add('uk-hidden');
    this.textoPre.nativeElement.classList.remove('uk-hidden');
   

  }

  onFocusInEvent(event:any){
    console.log(event);
    event.target.classList.remove('uk-hidden');
    this.textoPre.nativeElement.classList.add('uk-hidden');
    

  }

  clickText(){
    this.textareaPa.nativeElement.classList.remove('uk-hidden');
    this.textoPre.nativeElement.classList.add('uk-hidden');
    console.log(this.textoPre);
  }

  changeAligment(){
    switch(this.align){
      
      
      case 0:
        this.align = 3
      break; 
      case 3:
        this.align = 2
      break;  
      case 2:
        this.align = 1
      break;
      case 1:
        this.align = 0
      break; 

    }
  }
  

  changeSize(size:number){
    switch(size){
      case 0:
        this.size = 9 
      break;
      case 9:
        this.size = 8
      break;
      case 8:
        this.size = 7
      break;
      case 7:
        this.size = 6
      break;
      case 6:
        this.size = 5
      break;
      case 5:
        this.size = 4
      break;
      case 4:
        this.size = 3
      break; 
      case 3:
        this.size = 2
      break; 
      case 2:
        this.size = 1
      break; 
      case 1:
        this.size = 0
      break; 

    }
  }


  constructor() { }

  ngOnInit(): void {
  }
 
}
