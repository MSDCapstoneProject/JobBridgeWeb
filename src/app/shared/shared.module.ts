import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { EmployerNameFilter }         from './employerNameFilter';
import { JobSeekerNameFilter }         from './jobSeekerNameFilter';
import { JobNameFilter }         from './jobNameFilter';
import { JobListFilter }         from './jobListFilter';
import { DemoNumber }          from './demoNumber';
import { ApplicationNameFilter } from './ApplicationNameFilter';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ EmployerNameFilter, JobSeekerNameFilter, JobNameFilter, JobListFilter, DemoNumber, ApplicationNameFilter ],
  exports:      [ EmployerNameFilter, JobSeekerNameFilter, JobNameFilter, JobListFilter, DemoNumber, ApplicationNameFilter, CommonModule, FormsModule ]
})
export class SharedModule { }