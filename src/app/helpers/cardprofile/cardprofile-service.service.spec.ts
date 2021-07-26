import { TestBed } from '@angular/core/testing';

import { CardprofileServiceService } from './cardprofile-service.service';

describe('CardprofileServiceService', () => {
  let service: CardprofileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardprofileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
