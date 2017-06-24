import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Application, ApplicationList } from '../application/application.service';

@Pipe({
  name: 'applicationNameFilter'
})
@Injectable()
export class ApplicationNameFilter implements PipeTransform {
  transform(applications: ApplicationList[], args: any[]): any {
    if (applications == null) {
      return null;
    } else if (args == null || args[0] == null) {
      return applications;
    } else {
      console.log(args[0]);
      return applications.filter(application => application.JobSeeker.firstName.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
  }
}