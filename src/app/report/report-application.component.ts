import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './report.service';

@Component({
    selector: 'report-application',
 templateUrl: './report-application.component.html',
   styleUrls: [ './report-job.component.css' ]
})
export class ReportApplicationComponent implements OnInit {
    constructor(private route: ActivatedRoute, private ReportService: ReportService) { }

    async ngOnInit() {
    }
}