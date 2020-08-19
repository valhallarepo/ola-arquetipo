import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
  });

  it('expects that service has been created',
    inject([HomeService],
      (service: HomeService) => {
        expect(service).toBeTruthy();
      })
  );

});
