import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {
  public articles : any[] = [];

  constructor(private Content: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.Content.getArticles().then( (response:any)=>{
      this.articles = response.Data;
    } ).catch((error: any)=>{
      if(error){
        alert('error');
      }
    });
  }

  openArticle(alias:string){
    this.router.navigate(['/'+alias]);
  }

}
