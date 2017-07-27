import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http'

import { ReportComponent } from './report.component';
import { ReportMainComponent } from './report-main.component';
import { ReportJobComponent } from './report-job.component';
import { ReportJobSeekerComponent } from './report-jobSeeker.component';
import { ReportApplicationComponent } from './report-application.component';
import { ReportSubscriptionComponent } from './report-subscription.component';
import { ReportRatingComponent } from './report-rating.component';
import { ReportChartComponent } from './report-chart.component';

import { ReportRoutingModule }   from './report-routing.module';
import { ReportService } from './report.service';
import { JobService } from '../job/job.service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, HttpModule, MaterialModule, SharedModule, ReportRoutingModule, ChartsModule ],
  declarations: [ ReportComponent, ReportMainComponent, ReportJobComponent, ReportJobSeekerComponent, ReportApplicationComponent, ReportSubscriptionComponent, ReportRatingComponent, ReportChartComponent ],
  providers:    [ ReportService, JobService ],
})
export class ReportModule { }
