import { Component, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobSeeker, JobSeekerService } from './jobSeeker.service';

@Component({
    selector: 'jobSeeker-detail',
 templateUrl: './jobSeeker-detail.component.html',
   styleUrls: [ './jobSeeker-detail.component.css' ]
})
export class JobSeekerDetailComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private jobSeekerService: JobSeekerService) { }

  @Input() inputJobSeeker: JobSeeker;
  jobSeeker: JobSeeker;
  statuses = [ 'Student', 'Canadian Citizenship', 'Resident' ];
  genders = [ 'Male', 'Female' ];
  selectDisabled = true;

  async ngOnChanges() {
    if (this.inputJobSeeker != null) {
      let id = this.inputJobSeeker.id;
      //let id = parseInt(this.route.snapshot.params['id'], 10);
      
      this.jobSeekerService.jobSeeker.subscribe(jobSeeker => this.jobSeeker = <JobSeeker> jobSeeker[0]);
      this.jobSeekerService.getJobSeeker(id);
    }
  }

  post() {
    this.jobSeekerService.update(this.jobSeeker);
  }

  delete() {
    this.jobSeekerService.delete(this.jobSeeker);
    this.jobSeeker = null;
    this.router.navigate(['../../jobSeekers'], {relativeTo: this.route});
  }
}