import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Content: ContentService,
  ) { }

  private alias : any;
  public article: any;

  public state: number = 0;

  ngOnInit() {
    this.alias = this.route.snapshot.paramMap.get('alias');
    if(this.alias){
      this.Content
      .getArticle(this.alias)
      .then( (response: any) => {
        console.log(response);
        if(response){
          this.article = JSON.parse(response.Data.fulltext) || {};
          console.log(this.article);
        }
      } )
      .catch( (error:any) => {
        if(error){
          let texto : string = (error.error) ? error.error.Message : '';
          if(error.status === 400){
            Swal.fire({
              title: 'Info!',
              text: texto,
              icon: 'info',
              showCancelButton: false,
              showConfirmButton: false
            });
          }
          console.log(error);
        }
      } );
    } else {
      alert('Article not found');
    }
  }

  openedit(){
    this.state = 1;
  }

  closeEdit(){
    this.state = 0;
  }

  updateAfterEdit(){
    this.ngOnInit();
  }

}
