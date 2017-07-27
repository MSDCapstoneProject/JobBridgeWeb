import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Filter, FilterType } from './commonObject';
import { Employer } from '../employer/employer.service';

@Pipe({
  name: 'employerPipe',
  pure: false
})
@Injectable()
export class EmployerPipe implements PipeTransform {
  transform(employers: Employer[], args: Filter[]): any {
    if (employers == null) {
      return null;
    } else if (args == null || args.length == 0) {
      return employers;
    } else {
      args.forEach(arg => {
        if(arg.type == FilterType.CONTAINS) {
          employers = employers.filter(employer => employer[arg.key].toLowerCase().indexOf(arg.value.toLowerCase()) !== -1);
        }
      });
      return employers;
    }
  }
}