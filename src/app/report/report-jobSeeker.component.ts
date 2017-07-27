import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from './report.service';

@Component({
    selector: 'report-jobSeeker',
 templateUrl: './report-jobSeeker.component.html',
   styleUrls: [ './report-jobSeeker.component.css' ]
})
export class ReportJobSeekerComponent implements OnInit {
    constructor(private route: ActivatedRoute, private ReportService: ReportService) { }

    async ngOnInit() {
    }
}