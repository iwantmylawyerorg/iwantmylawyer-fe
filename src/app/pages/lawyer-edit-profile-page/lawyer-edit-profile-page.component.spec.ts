import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerEditProfilePageComponent } from './lawyer-edit-profile-page.component';

describe('LawyerEditProfilePageComponent', () => {
  let component: LawyerEditProfilePageComponent;
  let fixture: ComponentFixture<LawyerEditProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyerEditProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerEditProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
