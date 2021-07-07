import { TestBed } from '@angular/core/testing';

import { VideogeneratorService } from './videogenerator.service';

describe('VideogeneratorService', () => {
  let service: VideogeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
