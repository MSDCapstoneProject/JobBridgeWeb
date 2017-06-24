import { Component, ElementRef, ViewChild, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Application, ApplicationService } from './application.service';
import { KeyValuePair } from '../shared/commonObject';
import { DemoNumber } from '../shared/demoNumber';

import * as Quill from 'quill';
import { QuillEditorComponent } from 'quill';
import Counter from '../shared/quill.counter';

// override p with div tag

const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);
Quill.register('modules/counter', Counter)

@Component({
    selector: 'application-detail',
 templateUrl: './application-detail.component.html',
   styleUrls: [ './application-detail.component.css' ]
})
export class ApplicationDetailComponent implements OnChanges {
  constructor(private router: Router, private route: ActivatedRoute, private applicationService: ApplicationService) { }
  @ViewChild('editor') editor: QuillEditorComponent;

  @Input() inputApplication: Application;

  application: Application;

  async ngOnChanges() {
    if (this.inputApplication != null) {
      let id = this.inputApplication.id;

      this.applicationService.getApplication(id);

      this.applicationService.application.subscribe(
        application => this.application = <Application> application[0],
        error => console.log("Error: ", error)
      );
    }
  }

  accept() {
    this.applicationService.update(this.application);
  }

  deny() {
    
  }
}