import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { EmployerPipe }        from './employer.pipe';
import { JobSeekerPipe }       from './jobSeeker.pipe';
import { JobPipe }             from './job.pipe';
import { DemoNumber }          from './demoNumber';
import { ApplicationNameFilter } from './ApplicationNameFilter';
import { JobStatsPipe } from './job.stats.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ EmployerPipe, JobSeekerPipe, JobPipe, DemoNumber, ApplicationNameFilter, JobStatsPipe ],
  exports:      [ EmployerPipe, JobSeekerPipe, JobPipe, DemoNumber, ApplicationNameFilter, JobStatsPipe, CommonModule, FormsModule ]
})
export class SharedModule { }