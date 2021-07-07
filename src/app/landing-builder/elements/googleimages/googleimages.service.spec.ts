import { TestBed } from '@angular/core/testing';

import { GoogleimagesService } from './googleimages.service';

describe('GoogleimagesService', () => {
  let service: GoogleimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
