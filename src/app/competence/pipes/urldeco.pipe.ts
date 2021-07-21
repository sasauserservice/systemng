import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urldeco'
})
export class UrldecoPipe implements PipeTransform {

  constructor(private domsanitaizer: DomSanitizer){ }
  transform(uri: any): any {
    return this.domsanitaizer.bypassSecurityTrustResourceUrl(uri);
  }

}
