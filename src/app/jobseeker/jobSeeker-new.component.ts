import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobSeeker, JobSeekerService } from './jobSeeker.service';

@Component({
    selector: 'jobSeeker-new',
 templateUrl: './jobSeeker-new.component.html',
   styleUrls: [ './jobSeeker-new.component.css' ]
})
export class JobSeekerNewComponent {
    constructor(private router: Router, private route: ActivatedRoute, private jobSeekerService: JobSeekerService) { }

    jobSeeker: JobSeeker = {
        id: null,
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        email: '',
        phone: '',
        sin: '',
        DOB: '',
        status: '',
        gender: ''
    };

    statuses = [ 'Student', 'Resident' ];
    genders = [ 'Male', 'Female' ];

    post() {
        this.jobSeekerService.insert(this.jobSeeker);
        this.router.navigate(['../../jobSeekers'], {relativeTo: this.route});
    }
}