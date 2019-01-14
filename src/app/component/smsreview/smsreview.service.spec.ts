import { TestBed } from '@angular/core/testing';

import { SmsreviewService } from './smsreview.service';

describe('SmsreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmsreviewService = TestBed.get(SmsreviewService);
    expect(service).toBeTruthy();
  });
});
