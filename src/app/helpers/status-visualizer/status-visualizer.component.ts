import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-visualizer',
  templateUrl: './status-visualizer.component.html',
  styleUrls: ['./status-visualizer.component.scss']
})
export class StatusVisualizerComponent implements OnInit {

  @Input() statusData : any = 0;
  @Input() mode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(typeof this.statusData);
  }

}
