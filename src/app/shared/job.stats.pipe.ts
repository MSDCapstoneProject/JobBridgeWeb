import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Job, JobList } from '../job/job.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'jobStatsPipe',
  pure: false
})
@Injectable()
export class JobStatsPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}
  count:number;
  date:string;

  transform(jobs: JobList[], type: number): any {
    this.count = 0;
    this.date = this.datePipe.transform(new Date(), 'yyyyMMdd');
    //console.log(this.date);
    if (jobs == null || type == null) {
      return 0;
    } else {
      if (type === 0) {
        var expiryDate:String;
        jobs.forEach(job => {
          expiryDate = job.expiryDate;
          if (this.date <= expiryDate.replace('-','').replace('-','')) {
            this.count ++;
          }
        });
      } else if (type === 1){
        jobs.forEach(job => {
          this.count = this.count + job.views;
        });
      }
      return this.count;
    }
  }
}