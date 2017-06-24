import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employers',
    loadChildren: 'app/employer/employer.module#EmployerModule'
    //redirectTo: '/employer', pathMatch: 'full'
  },
  {
    path: 'jobSeekers',
    loadChildren: 'app/jobSeeker/jobSeeker.module#JobSeekerModule'
  },
  {
    path: 'jobs',
    loadChildren: 'app/job/job.module#JobModule'
  },
  {
    path: 'applications',
    loadChildren: 'app/application/application.module#ApplicationModule'
  }
];

@NgModule({
  imports:  [ RouterModule.forRoot(appRoutes) ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule {}