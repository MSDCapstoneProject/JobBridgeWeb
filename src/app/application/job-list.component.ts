import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job, JobList, JobCategory, JobType, JobService } from '../job/job.service';
import { KeyValuePair } from '../shared/commonObject';
import { JobPipe } from '../shared/job.pipe';
import { Filter, FilterType } from '../shared/commonObject';

@Component({
    selector: 'job-list',
 templateUrl: './job-list.component.html',
   styleUrls: [ './job-list.component.css' ]
})
export class JobListComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private jobService: JobService) { }

    filter: Filter[];

    statuses: KeyValuePair[] = [
      { key: 1, value: 'Open' },
      { key: 0, value: 'Closed' }
    ];
 
    async ngOnInit() {
        this.filter = [
            { type: FilterType.CONTAINS, key: "title", value: "" },
            { type: FilterType.CONTAINS, key: "street", value: "" },
            { type: FilterType.MATCHES, key: "status", value: "1" },
            { type: FilterType.MATCHES, key: "jobCategoryId", value: "" },
            { type: FilterType.MATCHES, key: "jobTypeId", value: "" }
        ];
        this.jobService.getJobs();
        this.jobService.getJobCategories();
        this.jobService.getJobTypes();
    }

    onSelect(job: Job): void {
        this.router.navigate(['application', job.id],  {relativeTo: this.route} );
    }
    
}