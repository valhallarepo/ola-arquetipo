import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';


describe('HomeService', () => {

  let httpMockInstance: HttpTestingController;

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

  it('expects service to fetch some data',
    inject([HttpTestingController, HomeService],
      (httpMock: HttpTestingController, service: HomeService) => {

        httpMockInstance = httpMock;

        const data = {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        };

        // We call the service
        service.get({ id: 1 }).subscribe(res => {
          expect(res).toEqual(data);
        });

        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne(`${service.getServerURL()}`);
        expect(req.request.method).toEqual('GET');
        // Then we set the fake data to be returned by the mock
        req.flush(data);
      })
  );

});
