import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCredentialsStepperComponent } from './lawyer-credentials-stepper.component';

describe('LawyerCredentialsStepperComponent', () => {
  let component: LawyerCredentialsStepperComponent;
  let fixture: ComponentFixture<LawyerCredentialsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyerCredentialsStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerCredentialsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
