import { Component, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartData, ChartDataset, ReportService } from './report.service';
import { Job } from '../job/job.service';

@Component({
    selector: 'report-chart',
 templateUrl: './report-chart.component.html',
   styleUrls: [ './report-chart.component.css' ]
})
export class ReportChartComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private reportService: ReportService) { }

    @Input() inputChart: string;
    @Input() inputJob: Job;
    @Input() inputYear: number;
    @Input() inputMonth: number;

    public chart:string;
    public chartType:string;
    public chartData;
    public chartDataset;
    public chartLabel;
    public chartOptions;
    public isPieChartBound = false;
    public isLineChartBound = false;
    public errorLog:string;
    public lineChartLegend:boolean = true;
    public lineChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    private jobId;
    private year;
    private month;

    async ngOnChanges() {
        //this.isBound = false;
        if (this.inputChart != null) {
            this.chart = this.inputChart;
            this.jobId = this.inputJob?this.inputJob.id:null;
            this.year = this.inputYear?this.inputYear:null;
            this.month = this.inputMonth?this.inputMonth:null;
            
            if(this.chart == 'City') {
                this.reportService.getJobsByCity(this.year, this.month).then(results => {
                    setTimeout(() => { 
                        if((<ChartData>results).data != null && (<ChartData>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartData = (<ChartData>results).data;
                            this.chartLabel = (<ChartData>results).label;
                            this.chartType = 'doughnut';
                            this.isPieChartBound = true;
                            this.isLineChartBound = false;
                        }
                    }, 500);
                });
            } else if(this.chart == 'Jobtype') {
                this.reportService.getJobsByType(this.year, this.month).then(results => {
                    setTimeout(() => { 
                        if((<ChartData>results).data != null && (<ChartData>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartData = (<ChartData>results).data;
                            this.chartLabel = (<ChartData>results).label;
                            this.chartType = 'doughnut';
                            this.isPieChartBound = true;
                            this.isLineChartBound = false;
                        }
                    }, 500);
                });
            } else if(this.chart == 'Jobcategory') {
                this.reportService.getJobsByCategory(this.year, this.month).then(results => {
                    setTimeout(() => { 
                        if((<ChartData>results).data != null && (<ChartData>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartData = (<ChartData>results).data;
                            this.chartLabel = (<ChartData>results).label;
                            this.chartType = 'doughnut';
                            this.isPieChartBound = true;
                            this.isLineChartBound = false;
                        }
                    }, 500);
                });
            } else if(this.chart == 'Views') {
                this.reportService.getJobsByMonthlyViews(this.year).then(results => {
                    setTimeout(() => { 
                        if((<ChartDataset>results).data != null && (<ChartDataset>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartDataset = (<ChartDataset>results).data;
                            this.chartLabel = (<ChartDataset>results).label;
                            this.chartType = 'bar';
                            this.isPieChartBound = false;
                            this.isLineChartBound = true
                        }
                    }, 500);
                });
            } else if(this.chart == 'Viewsbytype') {
                this.reportService.getJobsByMonthlyViewsByType(this.year).then(results => {
                    setTimeout(() => { 
                        if((<ChartDataset>results).data != null && (<ChartDataset>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartDataset = (<ChartDataset>results).data;
                            this.chartLabel = (<ChartDataset>results).label;
                            this.chartType = 'line';
                            this.isPieChartBound = false;
                            this.isLineChartBound = true;
                        }
                    }, 500);
                });
            } else if(this.chart == 'Viewsbycategory') {
                this.reportService.getJobsByMonthlyViewsByCategory(this.year).then(results => {
                    setTimeout(() => { 
                        if((<ChartDataset>results).data != null && (<ChartDataset>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartDataset = (<ChartDataset>results).data;
                            this.chartLabel = (<ChartDataset>results).label;
                            this.chartType = 'line';
                            this.isPieChartBound = false;
                            this.isLineChartBound = true;
                        }
                    }, 500);
                });
            } else if(this.chart == 'Rating') {
                this.reportService.getJobsByRating(this.jobId, this.year, this.month).then(results => {
                    setTimeout(() => { 
                        if((<ChartData>results).data != null && (<ChartData>results).data.length == 0){
                            this.chart = null;
                            this.errorLog = 'No data found matching criteria.';
                        } else {
                            this.chartData = (<ChartData>results).data;
                            this.chartLabel = (<ChartData>results).label;
                            this.chartType = 'doughnut';
                            this.isPieChartBound = true;
                            this.isLineChartBound = false;
                        }
                    }, 500);
                });
            } else {
                this.chart = null;
                this.errorLog = 'This chart is not available at this point.';
            }
        }
    }
}