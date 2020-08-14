import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NotMyHomeService } from './not-my-home.service';


describe('NotMyHomeService', () => {

  let service: NotMyHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NotMyHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
