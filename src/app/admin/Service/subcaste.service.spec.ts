import { TestBed } from '@angular/core/testing';

import { SubcasteService } from './subcaste.service';

describe('SubcasteService', () => {
  let service: SubcasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
