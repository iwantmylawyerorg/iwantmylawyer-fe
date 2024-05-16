import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersSectionComponent } from './manage-users-section.component';

describe('ManageUsersSectionComponent', () => {
  let component: ManageUsersSectionComponent;
  let fixture: ComponentFixture<ManageUsersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageUsersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
