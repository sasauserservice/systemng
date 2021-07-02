import { Directive, Input, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appShowing]'
})
export class ShowingDirective implements OnInit {

  @Input() appShowing : any = false;

  constructor(public el: ElementRef) { }

  ngOnInit() : void {
    if(this.appShowing){
      //this.el.nativeElement.style.display = 'none';
      this.el.nativeElement.remove();
    }
  }

}
