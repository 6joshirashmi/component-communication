import { TestBed } from '@angular/core/testing';

import { CompcomService } from './compcom.service';

describe('CompcomService', () => {
  let service: CompcomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompcomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
