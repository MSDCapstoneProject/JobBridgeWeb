import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'demoNumber'})
@Injectable()
export class DemoNumber implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push((i>9 ? '' : '0') + i);
      }
      return res;
  }
}