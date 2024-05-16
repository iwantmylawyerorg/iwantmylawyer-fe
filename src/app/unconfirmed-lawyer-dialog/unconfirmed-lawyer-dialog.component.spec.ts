import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedLawyerDialogComponent } from './unconfirmed-lawyer-dialog.component';

describe('UnconfirmedLawyerDialogComponent', () => {
  let component: UnconfirmedLawyerDialogComponent;
  let fixture: ComponentFixture<UnconfirmedLawyerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnconfirmedLawyerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnconfirmedLawyerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
