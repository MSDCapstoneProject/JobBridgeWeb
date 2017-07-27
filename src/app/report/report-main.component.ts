import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './report.service';

@Component({
    selector: 'report-main',
 templateUrl: './report-main.component.html',
   styleUrls: [ './report-main.component.css' ]
})
export class ReportMainComponent implements OnInit {
    constructor(private route: ActivatedRoute, private ReportService: ReportService) { }

    async ngOnInit() {
    }
}