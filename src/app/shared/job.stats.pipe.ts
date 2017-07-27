import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Statistic, StatisticType } from './commonObject';
import { JobsByCity } from '../report/report.service';

@Pipe({
  name: 'jobStatsPipe',
  pure: false
})
@Injectable()
export class JobStatsPipe implements PipeTransform {
  data = [];
  temp:number[] = [350, 450];;
  transform(source: any[], statisticType: StatisticType, target: number): any {
    if (source == null || statisticType == null) {
      return this.temp;
    } else {
        console.log('Pipe start');
        console.log(source);
        console.log(statisticType);
        console.log(StatisticType.JOBS_BY_CITY);
        console.log(target);
        /*
        if (statisticType == StatisticType.JOBS_BY_CITY) {
            source.forEach(node => {
              this.data.push(node);
            });
            //console.log(this.data);
        }*/
      console.log(this.temp);
      console.log('Pipe end');
      //return this.data;
      return this.temp;
    }
  }
}