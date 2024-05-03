import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonQuestionsFormComponent } from './common-questions-form.component';

describe('CommonQuestionsFormComponent', () => {
  let component: CommonQuestionsFormComponent;
  let fixture: ComponentFixture<CommonQuestionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonQuestionsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonQuestionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
