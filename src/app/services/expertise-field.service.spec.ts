import { TestBed } from '@angular/core/testing';

import { ExpertiseFieldService } from './expertise-field.service';

describe('ExpertiseFieldService', () => {
  let service: ExpertiseFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertiseFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
