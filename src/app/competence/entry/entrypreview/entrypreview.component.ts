import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { VideogeneratorService } from '../../../landing-builder/elements/videogenerator/videogenerator.service';
@Component({
  selector: 'app-entrypreview',
  templateUrl: './entrypreview.component.html',
  styleUrls: ['./entrypreview.component.scss']
})
export class EntrypreviewComponent implements OnInit {

  @Input() urivideo : any = '';
  @Input() videoObj : any = {};
  @Output() cancelViewing = new EventEmitter<any>()

  constructor(private videoGeneratorService: VideogeneratorService) { }

  ngOnInit(): void {
    this.placeVideo()
  }

  videodata:any = {};
  cancelPreview(){
    this.cancelViewing.emit();
  } 
  placeVideo() : void {

    if( this.videoObj.url.trim() == '' ){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a URL from Vimeo or Youtube',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }

    this.videodata = this.videoGeneratorService.getProvider(this.videoObj.url);
    if(this.videodata.type == 'youtube'){

      this.videodata.image = this.videoGeneratorService.getImageYoutube(this.videodata.id);
      

    } else {

      this.videoGeneratorService.getImageVimeo(this.videodata.id).then( (response:any) => {
        console.log(response);
        this.videodata.image = {
          big: response[0].thumbnail_large,
          small: response[0].thumbnail_small
        };
        console.log(this.videodata);
         
      } ).catch( (erro: any) => {
        console.log(erro);
      } );

    }

  }

}
