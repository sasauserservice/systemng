import { TestBed } from '@angular/core/testing';

import { ImagesmanagerService } from './imagesmanager.service';

describe('ImagesmanagerService', () => {
  let service: ImagesmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
