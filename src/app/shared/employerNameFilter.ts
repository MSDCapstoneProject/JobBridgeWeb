import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Employer } from '../employer/employer.service';

@Pipe({
  name: 'employerNameFilter'
})
@Injectable()
export class EmployerNameFilter implements PipeTransform {
  transform(employers: Employer[], args: any[]): any {
    if (employers == null) {
      return null;
    } else if (args == null || args[0] == null) {
      return employers;
    } else {
      console.log(args[0]);
      return employers.filter(employer => employer.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
  }
}