import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseFieldFormComponent } from './expertise-field-form.component';

describe('ExpertiseFieldFormComponent', () => {
  let component: ExpertiseFieldFormComponent;
  let fixture: ComponentFixture<ExpertiseFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseFieldFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertiseFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
