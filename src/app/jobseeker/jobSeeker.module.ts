import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http'

import { JobSeekerComponent } from './jobSeeker.component';
import { JobSeekerListComponent } from './jobSeeker-list.component';
import { JobSeekerDetailComponent } from './jobSeeker-detail.component';
import { JobSeekerNewComponent } from './jobSeeker-new.component';

import { JobSeekerRoutingModule }   from './jobSeeker-routing.module';
import { JobSeekerService } from './jobSeeker.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule, MaterialModule, MdNativeDateModule, SharedModule, JobSeekerRoutingModule ],
  declarations: [ JobSeekerComponent, JobSeekerListComponent, JobSeekerDetailComponent, JobSeekerNewComponent ],
  providers:    [ JobSeekerService ],
})
export class JobSeekerModule { }
