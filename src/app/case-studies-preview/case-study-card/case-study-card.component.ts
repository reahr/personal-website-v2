import { Component, Input } from '@angular/core';
import { CaseStudy } from '../case-studies.service';

@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.component.html',
  styleUrls: ['./case-study-card.component.scss']
})
export class CaseStudyCardComponent {
  @Input() caseStudy!: CaseStudy; 
}
