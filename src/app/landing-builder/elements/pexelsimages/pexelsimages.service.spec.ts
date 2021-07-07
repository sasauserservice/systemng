import { TestBed } from '@angular/core/testing';

import { PexelsimagesService } from './pexelsimages.service';

describe('PexelsimagesService', () => {
  let service: PexelsimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelsimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
