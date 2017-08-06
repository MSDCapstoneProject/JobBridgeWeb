import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { WebServices } from './shared/web.services';
import { JobService } from './job/job.service';
import { JobSeekerService } from './jobseeker/jobSeeker.service';
import { ReportService } from './report/report.service';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpModule, MaterialModule, AppRoutingModule, ChartsModule, SharedModule ],
  declarations: [ AppComponent, NavComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebServices, JobService, JobSeekerService, ReportService ]
})
export class AppModule { }
