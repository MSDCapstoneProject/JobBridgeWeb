import { Component, ElementRef, ViewChild, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job, JobCategory, JobType, JobService } from './job.service';
import { KeyValuePair } from '../shared/commonObject';
import { DemoNumber } from '../shared/demoNumber';

import * as Quill from 'quill';
import { QuillEditorComponent } from 'quill';
import Counter from '../shared/quill.counter';

// override p with div tag

const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);
Quill.register('modules/counter', Counter)

@Component({
    selector: 'job-detail',
 templateUrl: './job-detail.component.html',
   styleUrls: [ './job-detail.component.css' ]
})
export class JobDetailComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private jobService: JobService) { }
  @ViewChild('editor') editor: QuillEditorComponent;

  @Input() inputJob: Job;
  
  startTime = { hour: '00', minute: '00' };
  endTime = { hour: '00', minute: '00' };
  statuses: KeyValuePair[] = [
      { key: 0, value: 'Open' },
      { key: 1, value: 'Close' }
  ];

  job: Job;

  status: KeyValuePair =  this.statuses[(this.job ? (this.job.status === true ? 0 : 1) : 0)];

  async ngOnChanges() {
    if (this.inputJob != null) {
      let id = this.inputJob.id;

      this.jobService.getJob(id);

      this.jobService.job.subscribe(
        job => {
          this.job = <Job> job[0];

          var startTimeValue = this.job.startTime.split(':');
          if(startTimeValue) {
            this.startTime.hour = startTimeValue[0];
            this.startTime.minute = startTimeValue[1];
          }
          var endTimeValue = this.job.endTime.split(':');
          if(endTimeValue) {
            this.endTime.hour = endTimeValue[0];
            this.endTime.minute = endTimeValue[1];
          }
          this.status = this.statuses[this.job.status === true ? 0 : 1];
        },
        error => console.log("Error: ", error)
      );
      
      this.jobService.getJobCategories();
      this.jobService.getJobTypes();
    }
  }

  post() {
    this.jobService.update(this.job);
  }

  delete() {
    this.jobService.delete(this.job);
    this.job = null;
    this.router.navigate(['../jobs'], {relativeTo: this.route});
  }
}