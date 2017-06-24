import { Component, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employer, EmployerService } from './employer.service';

@Component({
    selector: 'employer-detail',
 templateUrl: './employer-detail.component.html',
   styleUrls: [ './employer-detail.component.css' ]
})
export class EmployerDetailComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private employerService: EmployerService) { }

  @Input() inputEmployer: Employer;
  employer: Employer;

  async ngOnChanges() {
    if (this.inputEmployer != null) {
      let id = this.inputEmployer.id;
      //let id = parseInt(this.route.snapshot.params['id'], 10);
      
      this.employerService.employer.subscribe(employer => this.employer = <Employer> employer[0]);
      this.employerService.getEmployer(id);
    }
  }

  post() {
    this.employerService.update(this.employer);
  }

  delete() {
    this.employerService.delete(this.employer);
    this.employer = null;
    this.router.navigate(['../../employers'], {relativeTo: this.route});
  }
}