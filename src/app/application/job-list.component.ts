import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Application, ApplicationService } from './application.service';
import { KeyValuePair } from '../shared/commonObject';

import { Job, JobSearchArgs } from '../job/job.service';

@Component({
    selector: 'job-list',
 templateUrl: './job-list.component.html',
   styleUrls: [ './job-list.component.css' ]
})
export class JobListComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private applicationService: ApplicationService) { }

    search: JobSearchArgs = {
        title: '',
        location: '',
        status: 1
    }

    statuses: KeyValuePair[] = [
      { key: 0, value: 'Open' },
      { key: 1, value: 'Close' }
    ];

    async ngOnInit() {
        this.applicationService.getJobs();
    }

    onSelect(job: Job): void {
        this.router.navigate(['application', job.id],  {relativeTo: this.route},
        );
    }
    
}