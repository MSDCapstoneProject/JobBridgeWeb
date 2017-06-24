import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './employer.component';
import { EmployerListComponent } from './employer-list.component';
import { EmployerDetailComponent } from './employer-detail.component';
import { EmployerNewComponent } from './employer-new.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerComponent,
    children: [
        { 
            path: '',
            component: EmployerListComponent
        },
        {
            path: 'new',
            component: EmployerNewComponent
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
      component: EmployerListComponent,
  },
  {
      path: 'new',
      component: EmployerNewComponent
  }
];

@NgModule({
  imports:  [ RouterModule.forChild(routes) ],
  exports:  [ RouterModule ]
})
export class EmployerRoutingModule {}