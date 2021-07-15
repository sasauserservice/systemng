import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterusergroup'
})
export class FilterusergroupPipe implements PipeTransform {

  transform(data: any, option: any): any {
    if(option == ''){
      return data;
    } else {
      let ret : any = [];
      data.filter((ele: any) => {
        ele.groups.forEach( (a: any, b: any) => {
          if(a.id == option){
            ret.push(ele)
          }
        } );
      });
      return ret;
    }
  }

}
