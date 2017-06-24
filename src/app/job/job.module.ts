import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http'

import { JobComponent } from './job.component';
import { JobListComponent } from './job-list.component';
import { JobDetailComponent } from './job-detail.component';
import { JobNewComponent } from './job-new.component';

import { JobRoutingModule }   from './job-routing.module';
import { JobService } from './job.service';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, HttpModule, MaterialModule, MdNativeDateModule, SharedModule, JobRoutingModule, QuillModule ],
  declarations: [ JobComponent, JobListComponent, JobDetailComponent, JobNewComponent ],
  providers:    [ JobService ],
})
export class JobModule { }
