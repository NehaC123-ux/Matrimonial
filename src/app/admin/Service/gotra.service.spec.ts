import { TestBed } from '@angular/core/testing';

import { GotraService } from './gotra.service';

describe('GotraService', () => {
  let service: GotraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
