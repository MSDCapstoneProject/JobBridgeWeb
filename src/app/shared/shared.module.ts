import { NgModule }            from '@angular/core';
import { CommonModule, DatePipe }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { EmployerPipe }        from './employer.pipe';
import { JobSeekerPipe }       from './jobSeeker.pipe';
import { JobPipe }             from './job.pipe';
import { DemoNumber }          from './demoNumber';
import { RoundPipe }          from './round.pipe';
import { ApplicationNameFilter } from './ApplicationNameFilter';
import { JobStatsPipe } from './job.stats.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ EmployerPipe, JobSeekerPipe, JobPipe, DemoNumber, ApplicationNameFilter, JobStatsPipe, RoundPipe ],
  exports:      [ EmployerPipe, JobSeekerPipe, JobPipe, DemoNumber, ApplicationNameFilter, JobStatsPipe, RoundPipe, CommonModule, FormsModule ],
  providers:    [ DatePipe ],
})
export class SharedModule { }