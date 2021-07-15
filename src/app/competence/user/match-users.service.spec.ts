import { TestBed } from '@angular/core/testing';

import { MatchUsersService } from './match-users.service';

describe('MatchUsersService', () => {
  let service: MatchUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
