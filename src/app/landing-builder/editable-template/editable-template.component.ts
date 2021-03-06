import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/shared/article.model';
import { ContentService } from 'src/app/services/content.service';
import { ImagesmanagerService } from '../elements/imagesmanager/imagesmanager.service';
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
    ft: false,
    type: 0,
    parrafos: []
  };

  constructor(public imagesmanagerServ: ImagesmanagerService, private ContentService: ContentService) { }

  ngOnInit(): void {
    this.articleData.id = this.article.id;
    this.articleData.alias = this.article.alias;
    this.articleData.ft = this.article.ft || false;
    this.articleData.parrafos = this.article.parrafos || [];
    this.articleData.banner = this.article.banner || {};
    this.articleData.type = this.article.type || 0;
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
