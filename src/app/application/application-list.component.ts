import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application, ApplicationService } from './application.service';
import { ApplicationNameFilter } from '../shared/applicationNameFilter';

import { Job } from '../job/job.service';

@Component({
    selector: 'application-list',
 templateUrl: './application-list.component.html',
   styleUrls: [ './application-list.component.css' ]
})
export class ApplicationListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private applicationService: ApplicationService) { }

    selectedApplication: Application;
    showSearch = false;
    search = {
        title:''
    }

    private sub: any;
    id: number;

    async ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.applicationService.getApplications(1);
        });
    }

    onSelect(application: Application): void {
        this.selectedApplication = application;
    }
    
    toggleSearch() {
        if(this.showSearch) {
            this.showSearch = false;
        } else {
            this.showSearch = true;
        }
    }
}