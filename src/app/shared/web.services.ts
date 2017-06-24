import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // allow promise
import { Injectable } from '@angular/core'; // make this class as a injectable web service

@Injectable()
export class WebServices {

    constructor(private http:Http) {}

    getMessages() {
        return this.http.get('http://localhost:1234/messages').toPromise();
    }

    getEmployers() {
        return this.http.get('http://localhost:5000/employers').toPromise();
    }
}