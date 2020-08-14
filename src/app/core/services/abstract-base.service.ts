import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../model/base.model';
import { IBaseService } from './ibase.service';

export abstract class AbstractBaseService implements IBaseService {

  private baseResource: string;
  private baseHttpClient: HttpClient;

  constructor(resource: string, httpClient: HttpClient) {
    this.baseResource = resource;
    this.baseHttpClient = httpClient;
  }

  getResource(): string {
    return this.baseResource;
  }

  getHttpClient(): HttpClient {
    return this.baseHttpClient;
  }

  getServerURL(): string {
    return `${environment.API_SERVER}`;
  }

  getHttpHeaderOptionToken(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }


  abstract get(data: BaseModel): Observable<any>;
  abstract all(data?: BaseModel): Observable<Array<any>>;
  abstract save(data: BaseModel): Observable<any>;
  abstract patch(id: number | string, data: any): Observable<any>;
  abstract remove(data: BaseModel): Observable<any>;

}
