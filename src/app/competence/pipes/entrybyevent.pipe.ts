import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entrybyevent'
})
export class EntrybyeventPipe implements PipeTransform {

  transform(data: any, option: any): any {
    if(option == '' || option == null){
      return data;
    } else {
      let ret : any = [];
      data.filter((ele: any) => {
        if(ele.event_id == option){
          ret.push(ele);
        }
      });
      return ret;
    }
  }

}
