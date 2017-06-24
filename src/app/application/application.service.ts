import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';

import { Employer } from '../employer/employer.service';
import { JobSeeker } from '../jobSeeker/jobSeeker.service';
import { Job, JobList, JobCategory, JobType } from '../job/job.service';

export class Application {
    constructor(
        public id:number,
        public employerId:number, 
        public applicationStatus:string,
        public appliedOn:Date, 
        public jobId:number, 
        public jobSeekerId:number ) {
    }
}

export class ApplicationList {
    constructor(
        public id:number,
        public employerId:number, 
        public applicationStatus:string,
        public appliedOn:Date, 
        public jobId:number, 
        public jobSeekerId:number,
        public Employer:Employer,
        public JobSeeker:JobSeeker,
        public Job:Job ) {
    }
}

const FETCH_LATENCY = 500;

@Injectable()
export class ApplicationService {
    BASE_URL = 'http://localhost:5000';

    private jobsStore;
    private jobsSubject: Subject<JobList[]> = new Subject();
    jobs =  this.jobsSubject.asObservable();

    private jobStore;
    private jobSubject: Subject<JobList> = new Subject();
    job = this.jobSubject.asObservable();

    private applicationsStore;
    private applicationsSubject: Subject<ApplicationList[]> = new Subject();
    applications =  this.applicationsSubject.asObservable();

    private applicationStore;
    private applicationSubject: Subject<ApplicationList> = new Subject();
    application = this.applicationSubject.asObservable();

    constructor(private http:Http, private sb: MdSnackBar) {
        //this.Application.share();
    }

    getJobs() {
        this.http.get(this.BASE_URL + '/jobs').subscribe(response => {
            this.jobsStore = <JobList[]> response.json();
            this.jobsSubject.next(this.jobsStore);
        }, error => {
            this.handleError("Unable to get jobs");
        });
    }

    getApplications(id: number) {
        this.http.get(this.BASE_URL + '/jobApplications?id=' + id).subscribe(response => {
            this.applicationsStore = <ApplicationList[]> response.json();
            this.applicationsSubject.next(this.applicationsStore);
        }, error => {
            this.handleError("Unable to get Applications");
        });
    }

    getApplication(id: number | string) {
        this.http.get(this.BASE_URL + '/jobApplications?id=' + id).subscribe(response => {
            this.applicationStore = <ApplicationList> response.json();
            this.applicationSubject.next(this.applicationStore);
        }, error => {
            this.handleError("Unable to get selected application");
        });
    }

    async update(Application: Application) {
        try {
            let body = JSON.stringify(Application);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobApplications/update', body, options).toPromise();
            // response is not a object
            //this.getApplications();
            //this.ApplicationsStore.push(response.json());
            //this.ApplicationsSubject.next(this.ApplicationsStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post application");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}