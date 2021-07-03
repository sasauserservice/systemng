import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ImagesmanagerService } from '../imagesmanager/imagesmanager.service';
import { Article } from 'src/app/shared/article.model';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editable-template',
  templateUrl: './editable-template.component.html',
  styleUrls: ['./editable-template.component.scss']
})
export class EditableTemplateComponent implements OnInit, OnChanges {

  @Input() article : any = {};
  @Output() stateEdit = new EventEmitter<number>();
  @Output() reloadingData = new EventEmitter<any>();

  pathUploads : string = '/media/clientuploads';
  filename    : string = 'minifyupload';

  public articleData : Article = {
    id: 0,
    alias: '',
    image: '',
    parrafos: []
  };

  constructor(public imagesmanagerServ: ImagesmanagerService, private ContentService: ContentService) { }

  ngOnInit(): void {
    this.articleData.id = this.article.id;
    this.articleData.alias = this.article.alias;
    this.articleData.parrafos = this.article.parrafos || [];
    console.log(this.article)
    this.filename = this.filename + "_" + this.article.alias;
  }

  ngOnChanges(): void {

  }

  closeEdition(){
    this.stateEdit.emit(0);
  } 
  
  updateArticle(){
    let body = JSON.stringify(this.articleData);
    this.ContentService.updatepost(this.articleData.id, body).then((done: any) => {
      let text : string = done.Message;
      Swal.fire({
        title: 'Info!',
        text: text,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
      });
      this.reloadingData.emit(true);
    }).catch((error: any) => {
      console.log(error)
    });
  }
 
   

} 
 