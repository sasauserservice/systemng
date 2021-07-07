import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGoogleimages]'
})
export class GoogleimagesDirective {

  constructor(public el: ElementRef) {
    el.nativeElement.addEventListener('error', ()=>{
      el.nativeElement.remove();
    });
    
  }

}
