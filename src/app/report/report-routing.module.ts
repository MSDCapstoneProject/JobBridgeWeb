import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ReportMainComponent } from './report-main.component';
import { ReportJobComponent } from './report-job.component';
import { ReportJobSeekerComponent } from './report-jobSeeker.component';
import { ReportApplicationComponent } from './report-application.component';
import { ReportSubscriptionComponent } from './report-subscription.component';
import { ReportRatingComponent } from './report-rating.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
        { 
            path: '',
            component: ReportMainComponent
        },
        {
            path: 'job',
            component: ReportJobComponent
        },
        {
            path: 'jobSeeker',
            component: ReportJobSeekerComponent
        },
        {
            path: 'application',
            component: ReportApplicationComponent
        },
        {
            path: 'subscription',
            component: ReportSubscriptionComponent
        },
        {
            path: 'rating',
            component: ReportRatingComponent
        }
    ]
  }
];

@NgModule({
  imports:  [ RouterModule.forChild(routes) ],
  exports:  [ RouterModule ]
})
export class ReportRoutingModule {}