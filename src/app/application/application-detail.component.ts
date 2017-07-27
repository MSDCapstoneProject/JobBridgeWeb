import { Component, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Application, ApplicationService } from './application.service';

@Component({
    selector: 'application-detail',
 templateUrl: './application-detail.component.html',
   styleUrls: [ './application-detail.component.css' ]
})
export class ApplicationDetailComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private applicationService: ApplicationService) { }
  
  @Input() inputApplication: Application;
  application: Application;
  applicationStatus: String;

  async ngOnChanges() {
    if (this.inputApplication != null) {
      let id = this.inputApplication.id;

      this.applicationService.getApplication(id);

      this.applicationService.application.subscribe(
        application => {
          this.application = <Application> application[0];
          if (this.application.jobApplicationStatusId == 1) {
            this.applicationStatus = 'Applied';
          } else if (this.application.jobApplicationStatusId == 2) {
            this.applicationStatus = 'Approved By Employer';
          } else if (this.application.jobApplicationStatusId == 3) {
            this.applicationStatus = 'Denied By Employer';
          } else if (this.application.jobApplicationStatusId == 4) {
            this.applicationStatus = 'Cancelled';
          } else if (this.application.jobApplicationStatusId == 5) {
            this.applicationStatus = 'Cancelled By Employer';
          } else {
            this.applicationStatus = 'Undefined';
          }
        },
        error => console.log("Error: ", error)
      );
    }
  }

  accept() {
    this.application.jobApplicationStatusId = 2;
    this.applicationService.update(this.application);
  }

  deny() {
    this.application.jobApplicationStatusId = 3;
    this.applicationService.update(this.application);
  }

  cancel() {
    this.application.jobApplicationStatusId = 5;
    this.applicationService.update(this.application);
  }
}