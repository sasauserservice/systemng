import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RankingService } from '../ranking.service';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RankingService ) { }

  eventId:any = '0'
  event : any = {}
  all : any = {}
  top3 : any = {}
  categories : any = {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('event')
    this.getGenetalranking()
    
  }

  getGenetalranking(){
    this.service.getRanking(this.eventId).subscribe((response:any) => {
      this.event = response.event;
      this.all = response.all;
      this.top3 = response.top3;
      this.categories = response.categories;
      

    });
  }
 
}
