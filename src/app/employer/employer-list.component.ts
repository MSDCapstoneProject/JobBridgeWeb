import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employer, EmployerService } from './employer.service';
import { EmployerPipe } from '../shared/employer.pipe';
import { Filter, FilterType } from '../shared/commonObject';

@Component({
    selector: 'employer-list',
 templateUrl: './employer-list.component.html',
   styleUrls: [ './employer-list.component.css' ]
})
export class EmployerListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private employerService: EmployerService) { }

    selectedEmployer: Employer;
    showSearch = false;
    filter: Filter[];

    async ngOnInit() {
        this.filter = [
            { type: FilterType.CONTAINS, key: "name", value: "" },
            { type: FilterType.CONTAINS, key: "street", value: "" },
            { type: FilterType.CONTAINS, key: "phone", value: "" }
        ];
        this.employerService.getEmployers();
    }

    onSelect(employer: Employer): void {
        this.selectedEmployer = employer;
    }
    
    toggleSearch() {
        if(this.showSearch) {
            this.showSearch = false;
        } else {
            this.showSearch = true;
        }
    }
}