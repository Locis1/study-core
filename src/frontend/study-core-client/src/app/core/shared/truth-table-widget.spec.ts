import { TestBed } from '@angular/core/testing';

import { TruthTableWidget } from './truth-table-widget';

describe('TruthTableWidget', () => {
  let service: TruthTableWidget;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruthTableWidget);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
