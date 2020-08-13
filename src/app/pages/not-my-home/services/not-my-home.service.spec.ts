import { TestBed } from '@angular/core/testing';

import { NotMyHomeService } from './not-my-home.service';

describe('NotMyHomeService', () => {
  let service: NotMyHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotMyHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
