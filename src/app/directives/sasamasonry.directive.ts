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
    if(this.appSasamasonry == 2){
      console.log('hello');
      UIkit.grid(this.el.nativeElement, {
        masonry: true
      });
    } else if(this.appSasamasonry == 1) {
      UIkit.grid(this.el.nativeElement, {
        masonry: false
      });
    } else {
      this.el.nativeElement.removeAttribute('uk-grid');
      this.el.nativeElement.style = null;
      this.el.nativeElement.classList.remove('uk-grid-margin');
      let self = this;
      setTimeout(function(){  
        let childs = self.el.nativeElement.querySelectorAll('.uk-card');
        if(childs.length > 0){
          childs.forEach( (a:any, b:any) => {
            a.classList.remove('uk-grid-margin');
            console.log(a);
          } );
        }
      }, 800);
    }
  }

}
