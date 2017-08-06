import { Component } from '@angular/core';
import { NavComponent} from './nav.component';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav id="header" class="shadow-3dp"></nav>
    <div id="content">
      <div id="scrollableContent">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  { }
