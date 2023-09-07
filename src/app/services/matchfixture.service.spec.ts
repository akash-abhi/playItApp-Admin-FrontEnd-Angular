import { TestBed } from '@angular/core/testing';

import { MatchfixtureService } from './matchfixture.service';

describe('MatchfixtureService', () => {
  let service: MatchfixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchfixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
