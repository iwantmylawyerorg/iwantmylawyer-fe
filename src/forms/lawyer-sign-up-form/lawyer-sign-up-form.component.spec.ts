import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerSignUpFormComponent } from './lawyer-sign-up-form.component';

describe('LawyerSignUpFormComponent', () => {
  let component: LawyerSignUpFormComponent;
  let fixture: ComponentFixture<LawyerSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyerSignUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
