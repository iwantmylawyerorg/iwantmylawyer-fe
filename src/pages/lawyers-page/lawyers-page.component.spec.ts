import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyersPageComponent } from './lawyers-page.component';

describe('LawyersPageComponent', () => {
  let component: LawyersPageComponent;
  let fixture: ComponentFixture<LawyersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
