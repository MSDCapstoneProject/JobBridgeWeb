import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Job, JobList, JobSearchArgs } from '../job/job.service';

@Pipe({
  name: 'jobListFilter'
})
@Injectable()
export class JobListFilter implements PipeTransform {
  transform(jobs: JobList[], args: JobSearchArgs): any {
    console.log(args);
    if (jobs == null) {
      return null;
    } else if (args == null) {
      return jobs;
    } else {
      if(args.title) {
        jobs = jobs.filter(job => job.title.toLowerCase().indexOf(args.title.toLowerCase()) !== -1)
      }
      if(args.location) {
        jobs = jobs.filter(job => job.jobLocation.toLowerCase().indexOf(args.location.toLowerCase()) !== -1)
      }
      return jobs.filter(job => job.status === (args.status === 0 ? false : true));
    }
  }
}