import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { JobListComponent } from './job-list.component';
import { ApplicationListComponent } from './application-list.component';
import { ApplicationDetailComponent } from './application-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
        { 
            path: '',
            component: JobListComponent
        },
        {
            path: 'application/:id',
            component: ApplicationListComponent
        }
    ]
  }
];

@NgModule({
  imports:  [ RouterModule.forChild(routes) ],
  exports:  [ RouterModule ]
})
export class ApplicationRoutingModule {}