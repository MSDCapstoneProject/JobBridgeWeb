import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSeekerComponent } from './jobSeeker.component';
import { JobSeekerListComponent } from './jobSeeker-list.component';
import { JobSeekerDetailComponent } from './jobSeeker-detail.component';
import { JobSeekerNewComponent } from './jobSeeker-new.component';

const routes: Routes = [
  {
    path: '',
    component: JobSeekerComponent,
    children: [
        { 
            path: '',
            component: JobSeekerListComponent
        },
        {
            path: 'new',
            component: JobSeekerNewComponent
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
      component: JobSeekerListComponent,
  },
  {
      path: 'new',
      component: JobSeekerNewComponent
  }
];

@NgModule({
  imports:  [ RouterModule.forChild(routes) ],
  exports:  [ RouterModule ]
})
export class JobSeekerRoutingModule {}