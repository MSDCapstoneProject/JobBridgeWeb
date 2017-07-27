import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employer, EmployerService } from './employer.service';

@Component({
    selector: 'employer-new',
 templateUrl: './employer-new.component.html',
   styleUrls: [ './employer-new.component.css' ]
})
export class EmployerNewComponent {
    constructor(private router: Router, private route: ActivatedRoute, private employerService: EmployerService) { }

    employer: Employer = {
        id: null,
        name: '',
        street: '',
        email: '',
        phone: '',
        website: '',
        city: '',
        province: '',
        country: '',
        postalCode: ''
    };

    post() {
        this.employerService.insert(this.employer);
        this.router.navigate(['../../employers'], {relativeTo: this.route});
    }
}