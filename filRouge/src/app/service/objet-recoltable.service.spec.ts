import { TestBed } from '@angular/core/testing';

import { ObjetRecoltableService } from './objet-recoltable.service';

describe('ObjetRecoltableService', () => {
  let service: ObjetRecoltableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetRecoltableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
