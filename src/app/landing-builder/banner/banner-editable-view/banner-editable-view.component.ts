import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-banner-editable-view',
  templateUrl: './banner-editable-view.component.html',
  styleUrls: ['./banner-editable-view.component.scss']
})
export class BannerEditableViewComponent implements OnInit {

  constructor() { }
  public diagramType : number = 0;
  public image : any = '';
  public text : any = '';
  public textStyle : any = {} ;
  public textObj : any = {};



  @Output() asincData = new EventEmitter<any>();
  @Input() attrsInput : any = {};
  @Input() alias : any = '';
   


  ngOnInit(): void {
    this.setDiagramtype();
    
  }
 
  
  setDiagramtype(){
    if (this.attrsInput.type) {
      this.diagramType = this.attrsInput.type;
    }else{
      this.diagramType = 0;
    }

    if (this.attrsInput.image) {
      this.image = this.attrsInput.image;
    }else{
      this.image = 0;
    }

    if (this.attrsInput.text) {
      this.text = this.attrsInput.text;
    }else{
      this.text = '';
    }

    if (this.attrsInput.textStyle) {
      this.textStyle = this.attrsInput.textStyle;
    }else{
      this.textStyle = {
        size:  0,
        align:  0,
        bold:  false

      };
    }

    //text

    let textObj = {
      attrs:{
        text: this.attrsInput.text || '',
        style:{
          size: this.attrsInput.textStyle.size || 0,
          align: this.attrsInput.textStyle.align || 0,
          bold: this.attrsInput.textStyle.bold || false

        }
      }
    }

    this.textObj = textObj;

  }

  
    
  

  

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
    this.sendData();
    //this.asincData.emit()
  }

  setImage(eve:any){
    this.image = eve;
    this.sendData(); 
  }
  setText(eve:any){
    this.text = eve;
    this.sendData();
  }
  setTextStyle(val:any){
    this.textStyle = val;
    this.sendData();
  }

  sendData(){
    let objsend ={
      type: this.diagramType,
      image: this.image,
      text: this.text,
      textStyle: this.textStyle
    }

    this.asincData.emit(objsend);
  }





}
 