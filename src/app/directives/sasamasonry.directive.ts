import { Directive, ElementRef, OnInit,  Input, OnChanges } from '@angular/core';
declare var UIkit: any;

@Directive({
  selector: '[appSasamasonry]'
})
export class SasamasonryDirective implements OnChanges {

  @Input() appSasamasonry : any = '';

  constructor(public el: ElementRef) {
  }

  ngOnChanges(): void {
    console.log(this.appSasamasonry);
    if(this.appSasamasonry){
      console.log('hello');
      UIkit.grid(this.el.nativeElement, {
        masonry: true
      });
    } else {
      UIkit.grid(this.el.nativeElement, {
        masonry: false
      });
    }
  }

}
