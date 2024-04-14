import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSignUpFormComponent } from './client-sign-up-form.component';

describe('ClientSignUpFormComponent', () => {
  let component: ClientSignUpFormComponent;
  let fixture: ComponentFixture<ClientSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSignUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
