import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Job, JobCategory, JobType, JobService } from './job.service';
import { KeyValuePair } from '../shared/commonObject';
import { DemoNumber } from '../shared/demoNumber';

import * as Quill from 'quill';
import Counter from '../shared/quill.counter';

// override p with div tag

const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);
Quill.register('modules/counter', Counter)

@Component({
    selector: 'job-new',
 templateUrl: './job-new.component.html',
   styleUrls: [ './job-new.component.css' ]
})
export class JobNewComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private jobService: JobService, private datePipe:DatePipe) { }

    async ngOnInit() {
        this.jobService.getJobCategories();
        this.jobService.getJobTypes();
    }

    startTime = { hour: '00', minute: '00' };
    endTime = { hour: '00', minute: '00' };
    statuses: KeyValuePair[] = [
        { key: 0, value: 'Open' },
        { key: 1, value: 'Closed' }
    ];
    status: KeyValuePair = this.statuses[0];

    job: Job = {
        id: null,
        title: '',
        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        wage: '',
        description: '',
        postDate: '',
        expiryDate: '',
        status: false,
        employerId: null,
        jobTypeId: null,
        jobCategoryId: null,
        views: 0,
        totalPositions: 0,
        filledPositions: 0
    };

    post() {
        this.job.postDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.job.startTime = this.startTime.hour + ":" + this.startTime.minute + ":00";
        this.job.endTime = this.endTime.hour + ":" + this.endTime.minute + ":00";
        this.job.status = this.status.key === 0 ? true : false;
        this.jobService.insert(this.job);
        this.router.navigate(['../../jobs'], {relativeTo: this.route});
    }
}