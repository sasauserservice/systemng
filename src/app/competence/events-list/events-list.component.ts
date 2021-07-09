import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
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
    this.router.navigate(['/u/'+alias]);
  }

}
