import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Filter, FilterType } from './commonObject';
import { Job, JobList } from '../job/job.service';

@Pipe({
  name: 'jobPipe',
  pure: false
})
@Injectable()
export class JobPipe implements PipeTransform {
  transform(jobs: JobList[], args: Filter[]): any {
    if (jobs == null) {
      return null;
    } else if (args == null || args.length == 0) {
      return jobs;
    } else {
      args.forEach(arg => {
        if(arg.type == FilterType.CONTAINS) {
          jobs = jobs.filter(job => job[arg.key].toLowerCase().indexOf(arg.value.toLowerCase()) !== -1);
        }
        if(arg.type == FilterType.MATCHES && arg.value != '' && arg.value != 'all') {
                console.log(arg.key + ':'+ arg.value);
          jobs = jobs.filter(job => job[arg.key] == arg.value);
        }
      });
      return jobs;
      //return jobs.filter(job => job.status === (args.status === 0 ? false : true));
    }
  }
}