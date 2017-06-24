import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job.component';
import { JobListComponent } from './job-list.component';
import { JobDetailComponent } from './job-detail.component';
import { JobNewComponent } from './job-new.component';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    children: [
        { 
            path: '',
            component: JobListComponent
        },
        {
            path: 'new',
            component: JobNewComponent
        }
    ]
  }
];

const routes1: Routes = [
  {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
  },
  {
      path: 'list',
      component: JobListComponent,
  },
  {
      path: 'new',
      component: JobNewComponent
  }
];

@NgModule({
  imports:  [ RouterModule.forChild(routes) ],
  exports:  [ RouterModule ]
})
export class JobRoutingModule {}