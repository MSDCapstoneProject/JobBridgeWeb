import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Job, JobList } from '../job/job.service';

@Pipe({
  name: 'jobNameFilter'
})
@Injectable()
export class JobNameFilter implements PipeTransform {
  transform(jobs: JobList[], args: any[]): any {
    if (jobs == null) {
      return null;
    } else if (args == null || args[0] == null) {
      return jobs;
    } else {
      console.log(args[0]);
      return jobs.filter(job => job.title.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
  }
}