import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-microdashboard',
  templateUrl: './microdashboard.component.html',
  styleUrls: ['./microdashboard.component.scss']
})
export class MicrodashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() reloadParameters = new EventEmitter<any>();


  public statusRightBar       : number = 0;
  public statusReloadParams   : number = 0;
  public statusReloadPenalties: number = 0;
  public statusReloadCategories: number = 0;
  public currentEdition       : any    = {};



  statuschange(status:number,action:string){
    this.statusRightBar = status;
    if(action){
      // emit de accion
      if(action == 'reloadParameters'){
        this.statusReloadParams = 1;
      } else if(action == 'reloadPenalties'){
        this.statusReloadPenalties = 1;
      } else if(action == 'reloadCategory'){
        this.statusReloadCategories = 1;
      }
    }
  }
}
