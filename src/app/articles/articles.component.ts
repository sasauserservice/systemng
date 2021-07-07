import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
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
