import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerProfilePageComponent } from './lawyer-profile-page.component';

describe('LawyerProfilePageComponent', () => {
  let component: LawyerProfilePageComponent;
  let fixture: ComponentFixture<LawyerProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyerProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
