import { TestBed } from '@angular/core/testing';

import { MdInjector } from './md-injector';

describe('MdInjector', () => {
  let service: MdInjector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdInjector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
