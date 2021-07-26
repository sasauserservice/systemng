import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { CoreService } from '../services/core.service';

@Directive({
  selector: '[appConditionalContent]'
})
export class ConditionalContentDirective implements OnInit {

  @Input() appConditionalContent : any = [];
  @Input() groupsUser : any = [];
  groupsOfUser : any = [];

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('uk-hidden');
  }

  ngOnInit() {
    const found = this.groupsUser.some((group:any) => this.appConditionalContent.includes(group));
    if(found) {
      this.el.nativeElement.classList.remove('uk-hidden');
    } else {
      this.el.nativeElement.remove();
    }
  }

}
