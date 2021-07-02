import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeruri'
})
export class SanitizeruriPipe implements PipeTransform {

  constructor(private domsanitaizer: DomSanitizer){ }

  transform(uri: any): any {
    return this.domsanitaizer.bypassSecurityTrustResourceUrl(uri);
  }

}
