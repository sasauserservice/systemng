import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { VideogeneratorService } from './videogenerator.service';

@Component({
  selector: 'app-videogenerator',
  templateUrl: './videogenerator.component.html',
  styleUrls: ['./videogenerator.component.scss']
})
export class VideogeneratorComponent implements OnInit {

  @Output() receiveVideo = new EventEmitter<any>();

  public urivideo : any = '';
  public videodata : any = {};

  constructor(private videoGeneratorService: VideogeneratorService) { }

  ngOnInit(): void {
  }

  asyncData(data: any){
    this.receiveVideo.emit(data);
  }

  deleteVideo(){
    this.videodata = {
      id: null,
      type: null,
      image: {}
    };
    this.receiveVideo.emit(this.videodata);
    this.urivideo = '';
  }

  placeVideo() : void {

    if( this.urivideo.trim() == '' ){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a URL from Vimeo or Youtube',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }

    this.videodata = this.videoGeneratorService.getProvider(this.urivideo);
    if(this.videodata.type == 'youtube'){

      this.videodata.image = this.videoGeneratorService.getImageYoutube(this.videodata.id);
      this.asyncData(this.videodata);

    } else {

      this.videoGeneratorService.getImageVimeo(this.videodata.id).then( (response:any) => {
        console.log(response);
        this.videodata.image = {
          big: response[0].thumbnail_large,
          small: response[0].thumbnail_small
        };
        console.log(this.videodata);
        this.asyncData(this.videodata);
      } ).catch( (erro: any) => {
        console.log(erro);
      } );

    }

  }

}
