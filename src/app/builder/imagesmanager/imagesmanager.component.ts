import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ImagesmanagerService } from './imagesmanager.service';
declare var UIkit: any;
@Component({
  selector: 'app-imagesmanager',
  templateUrl: './imagesmanager.component.html',
  styleUrls: ['./imagesmanager.component.scss']
})
export class ImagesmanagerComponent implements OnInit, OnChanges {

  public image: string = '';

  @Input() identity : string = '';
  @Input() path     : string = '';
  @Output() target  = new EventEmitter<string>();

  @ViewChild('imagenexter') modalexternal : any;
  @ViewChild('imagengoogle') imagengoogle : any;
  @ViewChild('uploadminifyimages') uploadminifyimages : any;



    // outputs 
    @Input() contenido : Array<any> = [];
    @Input() attr : object = {};
    @Input() position : any = 0;
  
    @Output() asyncData = new EventEmitter<any>();
    // outputs  
    
   sincronizar(val:any){
      this.asyncData.emit(val);
    }
 

  constructor(public imagesmanagerService: ImagesmanagerService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){

  }

  asyncValue(value: any){
    this.target.emit(value);
  }

  cleanImage(){
    this.asyncValue('');
  }

  openModalUpload(){
    UIkit.modal(this.uploadminifyimages.nativeElement).show();
  }

  openModalExternal(){
    UIkit.modal(this.modalexternal.nativeElement).show();
  }

  openModalGoogle(){
    UIkit.modal(this.imagengoogle.nativeElement).show();
  }

}
