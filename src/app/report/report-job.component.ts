import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Job, JobCategory, JobType, JobService } from '../job/job.service';
import { DemoNumber } from '../shared/demoNumber';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'report-job',
 templateUrl: './report-job.component.html',
   styleUrls: [ './report-job.component.css' ]
})
export class ReportJobComponent implements OnInit {
    jobCtrl: FormControl;
    filteredJobs: any;
    selectedJob: Job;
    selectedYear;
    selectedMonth;
    selectedChart: string;
    selectedChartName: string;

    months= [
        { 'id':0 , 'name':'All'},
        { 'id':1 , 'name':'April'},
        { 'id':2 , 'name':'February'},
        { 'id':3 , 'name':'March'},
        { 'id':4 , 'name':'April'},
        { 'id':5 , 'name':'May'},
        { 'id':6 , 'name':'June'},
        { 'id':7 , 'name':'July'},
        { 'id':8 , 'name':'August'},
        { 'id':9 , 'name':'September'},
        { 'id':10 , 'name':'October'},
        { 'id':11 , 'name':'November'},
        { 'id':12 , 'name':'December'}
    ];

    selectMonthDisabled = false; 
    selectJobDisabled = true; 

    constructor(private route: ActivatedRoute, private jobService: JobService) { 
        this.jobCtrl = new FormControl();
        this.filteredJobs = this.jobCtrl.valueChanges
        .startWith(null)
        .map(title => this.filterJobs(title));

        this.selectedChart = 'City';
        this.selectedChartName = 'City';
        this.selectedYear = new Date().getFullYear().toString();
        this.selectedMonth = new Date().getMonth() + 1;
    }

    async ngOnInit() {
        this.jobService.getJobs();
    }

    filterJobs(val: string) {
        return val ? this.jobService.jobs.filter(job => job['title'].toLowerCase().indexOf(val.toLowerCase()) !== -1)
                : this.jobService.jobs;
    }

    onSelect(chart: string): void {
        if(chart == 'Views' || chart == 'Viewsbytype' || chart == 'Viewsbycategory') {
            this.selectedMonth = 0;
            this.selectMonthDisabled = true;
        } else {
            this.selectedMonth = new Date().getMonth() + 1;
            this.selectMonthDisabled = false;
        }
        if(chart == 'Rating') {
            this.selectJobDisabled = false; 
        } else {
            this.selectJobDisabled = true; 
        }
        switch(chart) {
            case 'City':
                this.selectedChartName = 'City';
                break;
            case "Jobtype":
                this.selectedChartName = 'Job Type';
                break;
            case 'Jobcategory':
                this.selectedChartName = 'Job Category';
                break;
            case 'Views':
                this.selectedChartName = 'Views';
                break;
            case 'Viewsbytype':
                this.selectedChartName = 'Views By Job Type';
                break;
            case 'Viewsbycategory':
                this.selectedChartName = 'Views By Job Category';
                break;
            case 'Rating':
                this.selectedChartName = 'Rating';
                break;
            default:
                this.selectedChartName = 'Report';
        }
        this.selectedChart = chart;
    }
}