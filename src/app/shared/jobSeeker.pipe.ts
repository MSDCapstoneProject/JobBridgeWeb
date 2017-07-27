import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Filter, FilterType } from './commonObject';
import { JobSeeker } from '../jobSeeker/jobSeeker.service';

@Pipe({
  name: 'jobSeekerPipe',
  pure: false
})
@Injectable()
export class JobSeekerPipe implements PipeTransform {
  transform(jobSeekers: JobSeeker[], args: Filter[]): any {
    if (jobSeekers == null) {
      return null;
    } else if (args == null || args.length == 0) {
      return jobSeekers;
    } else {
      args.forEach(arg => {
        if(arg.type == FilterType.CONTAINS) {
          jobSeekers = jobSeekers.filter(jobSeeker => jobSeeker[arg.key].toLowerCase().indexOf(arg.value.toLowerCase()) !== -1);
        }
        if(arg.type == FilterType.MATCHES && arg.value != 'all') {
          jobSeekers = jobSeekers.filter(jobSeeker => jobSeeker[arg.key] == arg.value);
        }
      });
      return jobSeekers;
    }
  }
}