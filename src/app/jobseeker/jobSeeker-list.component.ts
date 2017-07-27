import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSeeker, JobSeekerService } from './jobSeeker.service';
import { JobSeekerPipe } from '../shared/jobSeeker.pipe';
import { Filter, FilterType } from '../shared/commonObject';

@Component({
    selector: 'jobSeeker-list',
 templateUrl: './jobSeeker-list.component.html',
   styleUrls: [ './jobSeeker-list.component.css' ]
})
export class JobSeekerListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private jobSeekerService: JobSeekerService) { }

    selectedJobSeeker: JobSeeker;
    showSearch = false;
    filter: Filter[];
    statuses = [ 'all', 'student', 'citizen' ];
    genders = [ 'all', 'male', 'female' ];

    async ngOnInit() {
        this.filter = [
            { type: FilterType.CONTAINS, key: "lastName", value: "" },
            { type: FilterType.CONTAINS, key: "street", value: "" },
            { type: FilterType.CONTAINS, key: "phone", value: "" },
            { type: FilterType.MATCHES, key: "status", value: "all" },
            { type: FilterType.MATCHES, key: "gender", value: "all" }
        ];
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