import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, JobService } from './job.service';
import { JobNameFilter } from '../shared/jobNameFilter';

@Component({
    selector: 'job-list',
 templateUrl: './job-list.component.html',
   styleUrls: [ './job-list.component.css' ]
})
export class JobListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private jobService: JobService) { }

    selectedJob: Job;
    showSearch = false;
    search = {
        title:''
    }

    async ngOnInit() {
        this.jobService.getJobs();
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