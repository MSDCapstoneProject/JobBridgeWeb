import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './report.service';

@Component({
    selector: 'report-subscription',
 templateUrl: './report-subscription.component.html',
   styleUrls: [ './report-subscription.component.css' ]
})
export class ReportSubscriptionComponent implements OnInit {
    constructor(private route: ActivatedRoute, private ReportService: ReportService) { }

    async ngOnInit() {
    }
}