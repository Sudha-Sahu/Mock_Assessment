import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAssessmentComponent } from './mock-assessment.component';

describe('MockAssessmentComponent', () => {
  let component: MockAssessmentComponent;
  let fixture: ComponentFixture<MockAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
