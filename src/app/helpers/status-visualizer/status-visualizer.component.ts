import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-visualizer',
  templateUrl: './status-visualizer.component.html',
  styleUrls: ['./status-visualizer.component.scss']
})
export class StatusVisualizerComponent implements OnInit {

  @Input() statusData        : any = 0;
  @Input() statusPenaltyData : any = 0;
  @Input() statusMainData    : any = 0;
  @Input() statusMatchData   : any = 0;


  @Input() showPenaltyStatus : any = false;
  @Input() showGeneralStatus : any = false;
  @Input() showMainStatus    : any = false;
  @Input() showMatchStatus   : any = false;

  @Input() mode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //console.log(typeof this.statusData);
  }

}
