import { Component } from '@angular/core';

@Component({
    selector: 'home',
 templateUrl: './home.component.html',
   styleUrls: [ './home.component.css' ]
})
export class HomeComponent  {
  tiles = [
    {text: '1', cols: 1, rows: 1, color: '#FF5454'},
    {text: '2', cols: 1, rows: 1, color: '#68C3ED'},
    {text: '3', cols: 1, rows: 1, color: '#FABB3E'},
    {text: '4', cols: 1, rows: 1, color: '#79C248'},
    {text: '5', cols: 1, rows: 2, color: 'white'},
    {text: '6', cols: 2, rows: 2, color: 'white'},
    {text: '7', cols: 1, rows: 2, color: 'white'},
    {text: '8', cols: 2, rows: 1, color: 'white'},
    {text: '9', cols: 1, rows: 1, color: 'white'},
    {text: '10', cols: 1, rows: 1, color: 'white'}
  ];
}
