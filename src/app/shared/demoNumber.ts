import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'demoNumber'})
@Injectable()
export class DemoNumber implements PipeTransform {
  from:number = 0;
  transform(value, args:string) : any {
    let res = [];
    if (args !=null) {
      if (args == 'year') {
        this.from = 2000;
      }
    }
    for (let i = this.from; i < value; i++) {
      res.push((i>9 ? '' : '0') + i);
    }
    return res;
  }
}