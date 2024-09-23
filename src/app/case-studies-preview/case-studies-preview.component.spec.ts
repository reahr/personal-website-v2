import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesPreviewComponent } from './case-studies-preview.component';

describe('CaseStudiesPreviewComponent', () => {
  let component: CaseStudiesPreviewComponent;
  let fixture: ComponentFixture<CaseStudiesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudiesPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudiesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
