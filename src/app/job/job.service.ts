import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';

import { Employer } from '../employer/employer.service';

export class Job {
    constructor(
        public id:number,
        public title:string, 
        public jobLocation:string,
        public startDate:string, 
        public endDate:string, 
        public startTime:string, 
        public endTime:string,
        public wage:string,
        public description:string,
        public postDate:string,
        public expiryDate:string,
        public status:boolean,
        public EmployerId:number,
        public JobTypeId:number,
        public JobCategoryId:number ) {
    }
}

export class JobList {
    constructor(
        public id:number,
        public title:string, 
        public jobLocation:string,
        public startDate:string, 
        public endDate:string, 
        public startTime:string, 
        public endTime:string,
        public wage:string,
        public description:string,
        public postDate:string,
        public expiryDate:string,
        public status:boolean,
        public EmployerId:number,
        public JobTypeId:number,
        public JobCategoryId:number,
        public Employer:Employer,
        public JobType:string,
        public JobCategory:string ) {
    }
}

export class JobCategory {
    constructor(
        public id:number,
        public description:string,
        public internalCode:string ) {
    }
}

export class JobType {
    constructor(
        public id:number,
        public description:string,
        public internalCode:string ) {
    }
}

export class JobSearchArgs {
    constructor(
        public title:string,
        public location:string,
        public status:number ) {
    }
}

const FETCH_LATENCY = 500;

@Injectable()
export class JobService {
    BASE_URL = 'http://localhost:5000';

    private jobsStore;
    private jobsSubject: Subject<JobList[]> = new Subject();
    jobs =  this.jobsSubject.asObservable();

    private jobStore;
    private jobSubject: Subject<JobList> = new Subject();
    job = this.jobSubject.asObservable();

    private jobCategoriesStore;
    private jobCategoriesSubject: Subject<JobCategory[]> = new Subject();
    jobCategories =  this.jobCategoriesSubject.asObservable();

    private jobTypesStore;
    private jobTypesSubject: Subject<JobType[]> = new Subject();
    jobTypes =  this.jobTypesSubject.asObservable();
    
    constructor(private http:Http, private sb: MdSnackBar) {
        //this.job.share();
    }

    getJobs() {
        this.http.get(this.BASE_URL + '/jobs').subscribe(response => {
            this.jobsStore = <JobList[]> response.json();
            this.jobsSubject.next(this.jobsStore);
        }, error => {
            this.handleError("Unable to get jobs");
        });
    }

    getJob(id: number | string) {
        this.http.get(this.BASE_URL + '/jobs?id=' + id).subscribe(response => {
            this.jobStore = <JobList> response.json();
            this.jobSubject.next(this.jobStore);
        }, error => {
            this.handleError("Unable to get selected job");
        });
    }

    getJobCategories() {
        this.http.get(this.BASE_URL + '/jobCategories').subscribe(response => {
            this.jobCategoriesStore = <JobCategory[]> response.json();
            this.jobCategoriesSubject.next(this.jobCategoriesStore);
        }, error => {
            this.handleError("Unable to get job categories");
        });
    }

    getJobTypes() {
        this.http.get(this.BASE_URL + '/jobTypes').subscribe(response => {
            this.jobTypesStore = <JobCategory[]> response.json();
            this.jobTypesSubject.next(this.jobTypesStore);
        }, error => {
            this.handleError("Unable to get job types");
        });
    }

    async insert(job: Job) {
        try {
            let body = JSON.stringify(job);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log(body);
            var response = await this.http.post(this.BASE_URL + '/jobs/add', body, options).toPromise();
            // response is not a object
            this.getJobs();
            //this.jobsStore.push(response.json());
            //this.jobsSubject.next(this.jobsStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post job");
        }
    }

    async update(job: Job) {
        try {
            let body = JSON.stringify(job);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobs/update', body, options).toPromise();
            // response is not a object
            this.getJobs();
            //this.jobsStore.push(response.json());
            //this.jobsSubject.next(this.jobsStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post job");
        }
    }

    async delete(job: Job) {
        try {
            let body = JSON.stringify(job);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobs/delete', body, options).toPromise();
            // response is not a object
            this.getJobs();
            //this.jobsStore.push(response.json());
            //this.jobsSubject.next(this.jobsStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post job");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}