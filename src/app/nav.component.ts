import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
        <md-toolbar color="primary">
            <button md-button routerLink="/" >Job Bridge</button>   
            <button md-button routerLink="/employers" >Employers</button>
            <button md-button routerLink="/jobSeekers" >JobSeekers</button>
            <button md-button routerLink="/jobs" >Jobs</button> 
            <button md-button routerLink="/applications" >Applications</button> 
        </md-toolbar>
    `
})
export class NavComponent {
}