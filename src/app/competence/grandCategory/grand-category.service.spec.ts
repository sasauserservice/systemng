import { TestBed } from '@angular/core/testing';

import { GrandCategoryService } from './grand-category.service';

describe('GrandCategoryService', () => {
  let service: GrandCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
