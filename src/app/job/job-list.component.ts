import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, JobCategory, JobType, JobService } from './job.service';
import { JobPipe } from '../shared/job.pipe';
import { Filter, FilterType } from '../shared/commonObject';

@Component({
    selector: 'job-list',
 templateUrl: './job-list.component.html',
   styleUrls: [ './job-list.component.css' ]
})
export class JobListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private jobService: JobService) { }

    selectedJob: Job;
    showSearch = false;
    filter: Filter[];

    async ngOnInit() {
        this.filter = [
            { type: FilterType.CONTAINS, key: "title", value: "" },
            { type: FilterType.CONTAINS, key: "street", value: "" },
            { type: FilterType.MATCHES, key: "jobCategoryId", value: "" },
            { type: FilterType.MATCHES, key: "jobTypeId", value: "" }
        ];
        this.jobService.getJobs();
        this.jobService.getJobCategories();
        this.jobService.getJobTypes();

        this.route.queryParams.subscribe(params => {
            if(params['jobId'] != null) {
                this.jobService.getJob(params['jobId']);
                this.jobService.job.subscribe(
                    job => {
                    this.selectedJob = <Job> job[0];
                    });
            }
        });
    }

    onSelect(job: Job): void {
        this.selectedJob = job;
    }
    
    toggleSearch() {
        if(this.showSearch) {
            this.showSearch = false;
        } else {
            this.showSearch = true;
        }
    }
}