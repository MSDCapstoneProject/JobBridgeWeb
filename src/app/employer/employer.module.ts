import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http'

import { EmployerComponent } from './employer.component';
import { EmployerListComponent } from './employer-list.component';
import { EmployerDetailComponent } from './employer-detail.component';
import { EmployerNewComponent } from './employer-new.component';

import { EmployerRoutingModule }   from './employer-routing.module';
import { EmployerService } from './employer.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule, MaterialModule, SharedModule, EmployerRoutingModule ],
  declarations: [ EmployerComponent, EmployerListComponent, EmployerDetailComponent, EmployerNewComponent ],
  providers:    [ EmployerService ],
})
export class EmployerModule { }
