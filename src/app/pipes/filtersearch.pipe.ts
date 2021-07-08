import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('');
    return null;
  }

}
