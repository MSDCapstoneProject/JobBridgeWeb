import { Component } from '@angular/core';
import { NavComponent} from './nav.component';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav></nav>
    <div class="content">
    <router-outlet></router-outlet></div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  { }
