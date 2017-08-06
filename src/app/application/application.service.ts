import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';
import { Job } from '../job/job.service';
import { Employer } from '../employer/employer.service';
import { JobSeeker } from '../jobSeeker/jobSeeker.service';

import { GlobalVariable } from '../shared/global';


export class Application {
    constructor(
        public id:number,
        public employerId:number, 
        public jobApplicationStatusId:number,
        public appliedOn:Date, 
        public jobId:number, 
        public jobSeekerId:number ) {
    }
}

export class ApplicationList {
    constructor(
        public id:number,
        public employerId:number, 
        public jobApplicationStatusId:number,
        public appliedOn:Date, 
        public jobId:number, 
        public jobSeekerId:number,
        public Employer:Employer,
        public JobSeeker:JobSeeker,
        public Job:Job ) {
    }
}

export class ApplicationStatus {
    constructor(
        public id:number,
        public description:string, 
        public internalCode:string) {
    }
}

const FETCH_LATENCY = 500;

@Injectable()
export class ApplicationService {
    BASE_URL = GlobalVariable.BASE_API_URL;

    private applicationsStore;
    private applicationsSubject: Subject<ApplicationList[]> = new Subject();
    applications =  this.applicationsSubject.asObservable();

    private applicationStore;
    private applicationSubject: Subject<ApplicationList> = new Subject();
    application = this.applicationSubject.asObservable();

    private applicationStatusStore;
    private applicationStatusSubject: Subject<ApplicationStatus> = new Subject();
    applicationStatus = this.applicationSubject.asObservable();

    constructor(private http:Http, private sb: MdSnackBar) {
        //this.Application.share();
    }

    getApplications(id: number) {
        this.http.get(this.BASE_URL + '/jobApplicants?jobId=' + id).subscribe(response => {
            this.applicationsStore = <ApplicationList[]> response.json();
            this.applicationsSubject.next(this.applicationsStore);
        }, error => {
            this.handleError("Unable to get job applications");
        });
    }

    getApplication(id: number | string) {
        this.http.get(this.BASE_URL + '/jobApplicants?jobApplicationId=' + id).subscribe(response => {
            this.applicationStore = <ApplicationList> response.json();
            this.applicationSubject.next(this.applicationStore);
        }, error => {
            this.handleError("Unable to get selected job application");
        });
    }

    getApplicationStatus() {
        this.http.get(this.BASE_URL + '/jobApplicationStatus').subscribe(response => {
            this.applicationStatusStore = <ApplicationStatus[]> response.json();
            this.applicationStatusSubject.next(this.applicationStatusStore);
        }, error => {
            this.handleError("Unable to get job categories");
        });
    }

    async update(application: Application) {
        try {
            let body = JSON.stringify(application);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobApplicants/update', body, options).toPromise();
            // response is not a object
            //this.getApplications(application.jobId);
            this.getApplication(application.id);
            //this.ApplicationsStore.push(response.json());
            //this.ApplicationsSubject.next(this.ApplicationsStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to change job application");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}