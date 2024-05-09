import { TestBed } from '@angular/core/testing';

import { CommonquestionsService } from './commonquestions.service';

describe('CommonquestionsService', () => {
  let service: CommonquestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonquestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
