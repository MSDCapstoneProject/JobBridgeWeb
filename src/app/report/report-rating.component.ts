import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './report.service';

@Component({
    selector: 'report-rating',
 templateUrl: './report-rating.component.html',
   styleUrls: [ './report-rating.component.css' ]
})
export class ReportRatingComponent implements OnInit {
    constructor(private route: ActivatedRoute, private ReportService: ReportService) { }

    async ngOnInit() {
    }
}