import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appConditionalJudgment]'
})
export class ConditionalJudgmentDirective implements OnInit {

  @Input() appConditionalJudgment : any[] = [];
  @Input() currentEntry : any = '';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('Hello from', this.appConditionalJudgment);
    console.log('Hello from', this.currentEntry);
  }

}
