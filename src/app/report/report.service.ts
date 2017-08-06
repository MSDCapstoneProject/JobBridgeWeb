import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MdSnackBar } from '@angular/material';
import { GlobalVariable } from '../shared/global';

const FETCH_LATENCY = 500;

export class ChartData {
    constructor(
        public data:number[],
        public label:string[]) {
    }
}

export class ChartDataset {
    constructor(
        public data:ChartData[],
        public label:string[]) {
    }
}

export class JobsByCity {
    constructor(
        public city:string,
        public data:number) {
    }
}

export class JobsByType {
    constructor(
        public description:string,
        public data:number) {
    }
}

export class JobsByCategory {
    constructor(
        public description:string,
        public data:number) {
    }
}

export class JobsByMonth {
    constructor(
        public month:string,
        public data:number) {
    }
}

export class JobsByMonthByType {
    constructor(
        public month:string,
        public description:string,
        public data:number) {
    }
}

export class JobsByMonthByCategory {
    constructor(
        public month:string,
        public description:string,
        public data:number) {
    }
}

export class JobsByRating {
    constructor(
        public thumb:string,
        public data:number) {
    }
}

export class LikesPerMonth {
    constructor(
        public yyyymm:string,
        public numberOfLikes:number,
        public numberOfDislikes:number,
        public averageRates:number ) {
    }
}

export class LikesPerWageGroup {
    constructor(
        public group:string,
        public numberOfLikes:number,
        public numberOfDislikes:number,
        public averageRates:number ) {
    }
}

export class JobDataPerMonth {
    constructor(
        public yyyymm:string,
        public filledPosition:number,
        public totalPosition:number,
        public payroll:number ) {
    }
}

@Injectable()
export class ReportService {
    BASE_URL = GlobalVariable.BASE_API_URL;
    chartData:ChartData;
    chartDataset:ChartDataset;

    constructor(private http:Http, private sb: MdSnackBar) {
        //this.Report.share();
    }

    getJobsByCity(year: number, month: number) {
        this.chartData = {data:[], label:[]};
        return new Promise<ChartData>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByCity?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year
                                            + '&month=' + (month?month:'')).subscribe(response => {
                    response.json().forEach(node => {
                        this.chartData.data.push((<JobsByCity>node).data);
                        this.chartData.label.push((<JobsByCity>node).city);
                    });
                    resolve(this.chartData); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByType(year: number, month: number) {
        this.chartData = {data:[], label:[]};
        return new Promise<ChartData>(resolve => {
            setTimeout(() => { 

                this.http.get(this.BASE_URL + '/statistics/jobsByJobType?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year
                                            + '&month=' + (month?month:'')).subscribe(response => {
                    response.json().forEach(node => {
                        this.chartData.data.push((<JobsByType>node).data);
                        this.chartData.label.push((<JobsByType>node).description);
                    });
                    resolve(this.chartData); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByCategory(year: number, month: number) {
        this.chartData = {data:[], label:[]};
        return new Promise<ChartData>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByJobCategory?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year
                                            + '&month=' + (month?month:'')).subscribe(response => {
                    response.json().forEach(node => {
                        this.chartData.data.push((<JobsByCategory>node).data);
                        this.chartData.label.push((<JobsByCategory>node).description);
                    });
                    resolve(this.chartData); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByMonthlyViews(year: number) {
        this.chartDataset = {data:[], label:[]};
        //this.chartDataset = {data:[{data:[], label:[]}], label:[]};
        return new Promise<ChartDataset>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByMonthlyViews?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year).subscribe(response => {
                    var data:ChartData = {data:[], label:[]};                      
                    response.json().forEach(node => {
                        data.data.push((<JobsByMonth>node).data);
                        this.chartDataset.label.push((<JobsByMonth>node).month);
                    });
                    data.label.push('Views');
                    this.chartDataset.data.push(data);
                    resolve(this.chartDataset); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByMonthlyViewsByType(year: number) {
        this.chartDataset = {data:[], label:[]};
        //this.chartDataset = {data:[{data:[], label:[]}], label:[]};
        return new Promise<ChartDataset>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByMonthlyViewsByJobType?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year).subscribe(response => {
                    var data:ChartData = {data:[], label:[]};  
                    var firstDesc:String = "";      
                    var previousDesc:String = "";                               
                    response.json().forEach(node => {
                        if(firstDesc !== "" && previousDesc !== (<JobsByMonthByType>node).description) {
                            data.label.push(previousDesc.toString());
                            this.chartDataset.data.push(data);
                            data = {data:[], label:[]}; 
                        } 
                        if(firstDesc === "") {
                            firstDesc = (<JobsByMonthByType>node).description;
                        }
                        if(firstDesc === (<JobsByMonthByType>node).description) {
                            this.chartDataset.label.push((<JobsByMonthByType>node).month);
                        }
                        data.data.push((<JobsByMonthByType>node).data);
                        previousDesc = (<JobsByMonthByType>node).description;
                    });
                    data.label.push(previousDesc.toString());
                    this.chartDataset.data.push(data);
                    resolve(this.chartDataset); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByMonthlyViewsByCategory(year: number) {
        this.chartDataset = {data:[], label:[]};
        //this.chartDataset = {data:[{data:[], label:[]}], label:[]};
        return new Promise<ChartDataset>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByMonthlyViewsByJobCategory?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&year=' + year).subscribe(response => {
                    var data:ChartData = {data:[], label:[]};  
                    var firstDesc:String = "";      
                    var previousDesc:String = "";                               
                    response.json().forEach(node => {
                        if(firstDesc !== "" && previousDesc !== (<JobsByMonthByCategory>node).description) {
                            data.label.push(previousDesc.toString());
                            this.chartDataset.data.push(data);
                            data = {data:[], label:[]}; 
                        } 
                        if(firstDesc === "") {
                            firstDesc = (<JobsByMonthByCategory>node).description;
                        }
                        if(firstDesc === (<JobsByMonthByCategory>node).description) {
                            this.chartDataset.label.push((<JobsByMonthByCategory>node).month);
                        }
                        data.data.push((<JobsByMonthByCategory>node).data);
                        previousDesc = (<JobsByMonthByCategory>node).description;
                    });
                    data.label.push(previousDesc.toString());
                    this.chartDataset.data.push(data);
                    resolve(this.chartDataset); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    getJobsByRating(jobId: number, year: number, month: number) {
        this.chartData = {data:[], label:[]};
        return new Promise<ChartData>(resolve => {
            setTimeout(() => { 
                this.http.get(this.BASE_URL + '/statistics/jobsByRating?employerId=' + GlobalVariable.BASE_EMPLOYER_ID
                                            + '&jobId=' + jobId
                                            + '&year=' + year
                                            + '&month=' + (month?month:'')).subscribe(response => {
                    response.json().forEach(node => {
                        this.chartData.data.push((<JobsByRating>node).data);
                        this.chartData.label.push((<JobsByRating>node).thumb);
                    });
                    resolve(this.chartData); 
                }, error => {
                    this.handleError("Unable to get data");
                });
            }, FETCH_LATENCY);
        });
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}