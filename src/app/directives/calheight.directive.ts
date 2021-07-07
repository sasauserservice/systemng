import { Directive, ElementRef, OnInit, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appCalheight]'
})
export class CalheightDirective implements OnInit, OnChanges {

  @Input() appCalheight : any = '';

  constructor(public el: ElementRef) { }


  ngOnInit(){
    this.el.nativeElement.addEventListener('focusin', ()=>{
      let ele = document.createElement(this.appCalheight);
      let lineheight = ele.style.lineheight;
      let valueLength = this.el.nativeElement.value.length;
      this.el.nativeElement.style.lineheight = 'normal !important';
      this.el.nativeElement.style.height = this.changeHeight(valueLength);
      console.log(this.el.nativeElement.style);
    });
  }

  ngOnChanges(){
  }

  changeHeight(lengthVal: any, ){
    let chars_per_row = 15;
    let pixles_per_row = 16;
    return Math.round((lengthVal / chars_per_row) * pixles_per_row) + 'px';
  }

}
