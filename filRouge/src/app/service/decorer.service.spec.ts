import { TestBed } from '@angular/core/testing';

import { DecorerService } from './decorer.service';

describe('DecorerService', () => {
  let service: DecorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
