import { Pipe, PipeTransform } from '@angular/core';
import { Employer } from '../employer/employer.service';

@Pipe({ name: 'employerPipe' })
export class EmployerPipe implements PipeTransform {
  transform(obj: Array<Employer>, arg: number) {
    if(obj) {
      return obj.filter(employer => employer.id = arg);
    }
  }
}
