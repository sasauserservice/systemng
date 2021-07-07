import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'updateuri'
})
export class UpdateuriPipe implements PipeTransform {

  constructor(private domsanitaizer: DomSanitizer){ }

  transform(uri: any): any {
    console.log(uri);
    return '';
  }

}
