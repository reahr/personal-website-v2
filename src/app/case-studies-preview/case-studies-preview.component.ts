import { Component } from '@angular/core';
import { CaseStudyService } from './case-studies.service';

@Component({
  selector: 'app-case-studies-preview',
  templateUrl: './case-studies-preview.component.html',
  styleUrls: ['./case-studies-preview.component.scss']
})
export class CaseStudiesPreviewComponent {

  constructor (public caseStudyService: CaseStudyService) {
  }

}
