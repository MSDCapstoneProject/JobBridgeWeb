import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { JobSeeker } from '../jobSeeker/jobSeeker.service';

@Pipe({
  name: 'jobSeekerNameFilter'
})
@Injectable()
export class JobSeekerNameFilter implements PipeTransform {
  transform(jobSeekers: JobSeeker[], args: any[]): any {
    if (jobSeekers == null) {
      return null;
    } else if (args == null || args[0] == null) {
      return jobSeekers;
    } else {
      console.log(args[0]);
      return jobSeekers.filter(jobSeeker => jobSeeker.firstName.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
  }
}