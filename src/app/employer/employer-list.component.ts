import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employer, EmployerService } from './employer.service';
import { EmployerNameFilter } from '../shared/EmployerNameFilter';

@Component({
    selector: 'employer-list',
 templateUrl: './employer-list.component.html',
   styleUrls: [ './employer-list.component.css' ]
})
export class EmployerListComponent implements OnInit {
    constructor(private route: ActivatedRoute, private employerService: EmployerService) { }

    selectedEmployer: Employer;
    showSearch = false;
    search = {
        name:''
    }

    async ngOnInit() {
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