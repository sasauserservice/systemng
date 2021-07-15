import { TestBed } from '@angular/core/testing';

import { CompetenceLandingService } from './competence-landing.service';

describe('CompetenceLandingService', () => {
  let service: CompetenceLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenceLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
