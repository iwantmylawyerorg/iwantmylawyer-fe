import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AILawyerComponent } from './ailawyer.component';

describe('AILawyerComponent', () => {
  let component: AILawyerComponent;
  let fixture: ComponentFixture<AILawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AILawyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AILawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
