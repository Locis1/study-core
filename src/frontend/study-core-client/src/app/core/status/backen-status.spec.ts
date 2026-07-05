import { TestBed } from '@angular/core/testing';

import { BackenStatus } from './backen-status';

describe('BackenStatus', () => {
  let service: BackenStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackenStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
