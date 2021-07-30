import { KeyValuePipe } from '@angular/common';
import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { CoreService } from '../services/core.service';

@Directive({
  selector: '[appConditionalContent]'
})
export class ConditionalContentDirective implements OnInit {

  @Input() appConditionalContent : any = [];
  groupsOfUser : any = [];
  groupsUser : any = [];

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('uk-hidden');
  }

  ngOnInit() {
    setTimeout(()=>{
      let kl = localStorage.getItem('logueduser') || '{}';
      let jl = JSON.parse(kl);
      this.groupsUser = jl.groups;
      console.log(this.groupsUser);
      const found = this.groupsUser.some((group:any) => this.appConditionalContent.includes(group));
      if(found) {
        this.el.nativeElement.classList.remove('uk-hidden');
      } else {
        this.el.nativeElement.remove();
      }
    }, 1000);
    
    /* */
  }

}
