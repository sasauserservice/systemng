import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UploadserviceService } from './uploadservice.service';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-uploadminify',
  templateUrl: './uploadminify.component.html',
  styleUrls: ['./uploadminify.component.scss']
})
export class UploadminifyComponent implements OnInit {

  public imageData : string = '';
  public progress  : number = 0;

  @ViewChild('uploadimageprogress') progressBar : any;
  @ViewChild('fieldfileinput') fieldfileInput : any;

  @Input() path : string = '';
  @Input() file : string = '';

 
 
  @Output() receiveImages = new EventEmitter<any>();

  constructor(private UploadServ: UploadserviceService) { }

  ngOnInit(){
  }

 

  openFileInput(){
    let fieldHtml = this.fieldfileInput.nativeElement;
    fieldHtml.click();
  }

  onFileSelect(event: Event){
    console.log(event);
    let file : any = ( event.target as HTMLInputElement );
    let allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    if(file && file.files){
      let FileObj = file.files[0];
      if(FileObj && allowedMimeTypes.includes(FileObj.type)){
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(FileObj);

        this.UploadServ.upload(FileObj, this.path, this.file).subscribe((response: any) => {
          console.log(response);
          Swal.fire({
            title: 'Info!',
            text: 'Upload ok',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.receiveImages.emit(response.url);
        }, (err:any) => {
          console.log(err)
        });
      }
    }
  }

}
