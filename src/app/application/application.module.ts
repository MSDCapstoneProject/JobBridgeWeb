import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http'

import { ApplicationComponent } from './application.component';
import { JobListComponent } from './job-list.component';
import { ApplicationListComponent } from './application-list.component';
import { ApplicationDetailComponent } from './application-detail.component';

import { ApplicationRoutingModule }   from './application-routing.module';
import { ApplicationService } from './application.service';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, HttpModule, MaterialModule, MdNativeDateModule, SharedModule, ApplicationRoutingModule, QuillModule ],
  declarations: [ ApplicationComponent, JobListComponent, ApplicationListComponent, ApplicationDetailComponent ],
  providers:    [ ApplicationService ],
})
export class ApplicationModule { }
