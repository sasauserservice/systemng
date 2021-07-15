import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input()  changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();
  public articles : any[] = [];

  constructor(private Content: ContentService, private router: Router) { }

  ngOnChanges(){
    
    if(this.changes == 1){
      this.ngOnInit(); 
      //alert('si esta llegandio');
      this.stateChange.emit(0);
    }
    
  }


  ngOnInit(): void {
    this.Content.getArticles().then( (response:any)=>{
      this.articles = response.Data;
    } ).catch((error: any)=>{
      if(error){
        alert('error');
      }
    });
  }
  

  edit(item: any){
    this.stateChangeBar.emit(8);
    this.currentEdit.emit(item);
  }

  openArticle(alias:string){
    //this.router.navigate(['/u/'+alias]);
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/u/${alias}`])
    );
    window.open(url, '_blank');
  }

}
