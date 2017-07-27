import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';

import { GlobalVariable } from '../shared/global';

export class JobSeeker {
    constructor(
        public id:number,
        public firstName:string, 
        public lastName:string,
        public street:string, 
        public city:string,
        public province:string,
        public country:string,
        public postalCode:string,
        public email:string, 
        public phone:string, 
        public sin:string,
        public DOB:string,
        public status:string,
        public gender:string) {
    }
}

const FETCH_LATENCY = 500;

@Injectable()
export class JobSeekerService {
    BASE_URL = GlobalVariable.BASE_API_URL;

    private jobSeekersStore;
    private jobSeekersSubject: Subject<JobSeeker[]> = new Subject();
    jobSeekers =  this.jobSeekersSubject.asObservable();

    private jobSeekerStore;
    private jobSeekerSubject: Subject<JobSeeker> = new Subject();
    jobSeeker = this.jobSeekerSubject.asObservable();

    constructor(private http:Http, private sb: MdSnackBar) {
        this.jobSeeker.share();
    }

    getJobSeekers() {
        //return new Promise<JobSeeker[]>(resolve => {
        //    setTimeout(() => { resolve(EMPLOYERS); }, FETCH_LATENCY);
        //});
        //return this.http.get('http://localhost:5000/jobSeekers').toPromise();
        this.http.get(this.BASE_URL + '/jobSeekers').subscribe(response => {
            this.jobSeekersStore = <JobSeeker[]> response.json();//.filter(jobSeeker => jobSeeker.id === 1);
            this.jobSeekersSubject.next(this.jobSeekersStore);
        }, error => {
            this.handleError("Unable to get jobSeekers");
        });
    }

    getJobSeeker(id: number | string) {
        this.http.get(this.BASE_URL + '/jobSeekers?id=' + id).subscribe(response => {
            this.jobSeekerStore = <JobSeeker> response.json();
            this.jobSeekerSubject.next(this.jobSeekerStore);
        }, error => {
            this.handleError("Unable to get selected jobSeeker");
        });
    }

    async insert(jobSeeker: JobSeeker) {
        try {
            let body = JSON.stringify(jobSeeker);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log(body);
            var response = await this.http.post(this.BASE_URL + '/jobSeekers/add', body, options).toPromise();
            // response is not a object
            this.getJobSeekers();
            //this.jobSeekersStore.push(response.json());
            //this.jobSeekersSubject.next(this.jobSeekersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post jobSeeker");
        }
    }

    async update(jobSeeker: JobSeeker) {
        try {
            let body = JSON.stringify(jobSeeker);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobSeekers/update', body, options).toPromise();
            // response is not a object
            this.getJobSeekers();
            //this.jobSeekersStore.push(response.json());
            //this.jobSeekersSubject.next(this.jobSeekersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post jobSeeker");
        }
    }

    async delete(jobSeeker: JobSeeker) {
        try {
            let body = JSON.stringify(jobSeeker);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/jobSeekers/delete', body, options).toPromise();
            // response is not a object
            this.getJobSeekers();
            //this.jobSeekersStore.push(response.json());
            //this.jobSeekersSubject.next(this.jobSeekersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post jobSeeker");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}