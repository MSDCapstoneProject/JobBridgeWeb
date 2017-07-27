import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';

import { GlobalVariable } from '../shared/global';

export class Employer {
    constructor(
        public id:number,
        public name:string, 
        public street:string,
        public email:string, 
        public phone:string, 
        public website:string,
        public city:string,
        public province:string,
        public country:string,
        public postalCode:string) {
    }
}

const FETCH_LATENCY = 500;

@Injectable()
export class EmployerService {
    BASE_URL = GlobalVariable.BASE_API_URL;

    private employersStore;
    private employersSubject: Subject<Employer[]> = new Subject();
    employers =  this.employersSubject.asObservable();

    private employerStore;
    private employerSubject: Subject<Employer> = new Subject();
    employer = this.employerSubject.asObservable();

    constructor(private http:Http, private sb: MdSnackBar) {
        this.employer.share();
    }

    getEmployers() {
        //return new Promise<Employer[]>(resolve => {
        //    setTimeout(() => { resolve(EMPLOYERS); }, FETCH_LATENCY);
        //});
        //return this.http.get('http://localhost:5000/employers').toPromise();
        this.http.get(this.BASE_URL + '/employers').subscribe(response => {
            this.employersStore = <Employer[]>response.json();//.filter(employer => employer.id === 1);
            console.log(this.employersStore);
            this.employersSubject.next(this.employersStore);
        }, error => {
            this.handleError("Unable to get employers");
        });
    }

    getEmployer(id: number | string) {
        this.http.get(this.BASE_URL + '/employers?id=' + id).subscribe(response => {
            this.employerStore = <Employer> response.json();
            this.employerSubject.next(this.employerStore);
        }, error => {
            this.handleError("Unable to get selected employer");
        });
    }

    async insert(employer: Employer) {
        try {
            let body = JSON.stringify(employer);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/employers/add', body, options).toPromise();
            // response is not a object
            this.getEmployers();
            //this.employersStore.push(response.json());
            //this.employersSubject.next(this.employersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post employer");
        }
    }

    async update(employer: Employer) {
        try {
            let body = JSON.stringify(employer);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/employers/update', body, options).toPromise();
            // response is not a object
            this.getEmployers();
            //this.employersStore.push(response.json());
            //this.employersSubject.next(this.employersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post employer");
        }
    }

    async delete(employer: Employer) {
        try {
            let body = JSON.stringify(employer);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            var response = await this.http.post(this.BASE_URL + '/employers/delete', body, options).toPromise();
            // response is not a object
            this.getEmployers();
            //this.employersStore.push(response.json());
            //this.employersSubject.next(this.employersStore);
        } catch (error) {
            console.log(error)
            this.handleError("Unable to post employer");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}