import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job, JobList, JobCategory, JobType, JobService } from './job/job.service';
import { JobSeeker, JobSeekerService } from './jobseeker/jobSeeker.service';
import { ChartData, ChartDataset, ReportService } from './report/report.service';
import { JobPipe } from './shared/job.pipe';
import { JobSeekerPipe } from './shared/jobSeeker.pipe';
import { Filter, FilterType } from './shared/commonObject';

@Component({
    selector: 'home',
 templateUrl: './home.component.html',
   styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private reportService: ReportService, private jobService: JobService, private jobSeekerService: JobSeekerService) { }
  tiles = [
    {text: '1', cols: 1, rows: 1, color: '#FF5454'},
    {text: '2', cols: 1, rows: 1, color: '#68C3ED'},
    {text: '3', cols: 1, rows: 1, color: '#FABB3E'},
    {text: '4', cols: 1, rows: 1, color: '#79C248'},
    {text: '5', cols: 1, rows: 2, color: 'white'},
    {text: '6', cols: 2, rows: 2, color: 'white'},
    {text: '7', cols: 1, rows: 2, color: 'white'},
    {text: '8', cols: 2, rows: 1, color: 'white'},
    {text: '9', cols: 1, rows: 1, color: 'white'},
    {text: '10', cols: 1, rows: 1, color: 'white'}
  ];

  selectedJob: Job;
  selectedJobSeeker: JobSeeker;

  public lineChartLegend:boolean = false;
  public lineChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
  };
  public chart1:string = "rating";
  public chart2:string = "views";
  public chartType1:string = 'doughnut';
  public chartType2:string = 'line';
  public chartData1;
  public chartData2;
  public chartLabel1;
  public chartLabel2;
  public errorLog1:string;
  public errorLog2:string;
  private year; 
  private month;
  private jobId;
  public jobFilter: Filter[];
  public jobseekerFilter: Filter[];
  async ngOnInit() {

      this.jobService.getJobs();
      this.jobSeekerService.getJobSeekers();
      this.year = new Date().getFullYear().toString();
      this.month = null;
      this.jobId = null;
      this.reportService.getJobsByRating(this.jobId, this.year, this.month).then(results => {
          setTimeout(() => { 
              if((<ChartData>results).data != null && (<ChartData>results).data.length == 0){
                  this.chart1 = null;
                  this.errorLog1 = 'This chart is not available at this point.';
              } else {
                  this.chartData1 = (<ChartData>results).data;
                  this.chartLabel1 = (<ChartData>results).label;
              }
          }, 500);
      });
      this.reportService.getJobsByMonthlyViews(this.year).then(results => {
          setTimeout(() => { 
              if((<ChartDataset>results).data != null && (<ChartDataset>results).data.length == 0){
                  this.chart2 = null;
                  this.errorLog2 = 'This chart is not available at this point.';
              } else {
                  this.chartData2 = (<ChartDataset>results).data;
                  this.chartLabel2 = (<ChartDataset>results).label;
                  console.log(this.chartData2);
              }
          }, 500);
      });
  }

  
  onJobSelect(job: Job): void {
    this.router.navigate(['jobs'], { queryParams: { jobId: job.id }});
  }

  onJobSeekerSelect(jobseeker: Job): void {
    this.router.navigate(['jobSeekers'], { queryParams: { jobseekerId: jobseeker.id }});
  }
}
