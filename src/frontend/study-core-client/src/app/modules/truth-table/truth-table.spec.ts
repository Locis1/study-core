import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthTable } from './truth-table';

describe('TruthTable', () => {
  let component: TruthTable;
  let fixture: ComponentFixture<TruthTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruthTable],
    }).compileComponents();

    fixture = TestBed.createComponent(TruthTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
