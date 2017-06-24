import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSeeker, JobSeekerService } from './jobSeeker.service';
import { JobSeekerNameFilter } from '../shared/JobSeekerNameFilter';

@Component({
    selector: 'jobSeeker-list',
 templateUrl: './jobSeeker-list.component.html',
   styleUrls: [ './jobSeeker-list.component.css' ]
})
export class JobSeekerListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private jobSeekerService: JobSeekerService) { }

    selectedJobSeeker: JobSeeker;
    showSearch = false;
    search = {
        name:''
    }

    async ngOnInit() {
        this.jobSeekerService.getJobSeekers();
    }

    onSelect(jobSeeker: JobSeeker): void {
        this.selectedJobSeeker = jobSeeker;
    }
    
    toggleSearch() {
        if(this.showSearch) {
            this.showSearch = false;
        } else {
            this.showSearch = true;
        }
    }
}