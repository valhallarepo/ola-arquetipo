import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../model/base.model';
import { AbstractBaseService } from './abstract-base.service';

export class BaseService extends AbstractBaseService {

  private URI: string;
  private unitTest: boolean;

  constructor(resource: string, httpClient: HttpClient) {
    super(resource, httpClient);
    this.unitTest = environment.unitTest;
    this.URI = (`${this.getServerURL()}` + (this.unitTest ? '' : `/${this.getResource()}`));
  }

  get(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    return this.getHttpClient().get<any>(`${this.URI}` + (this.unitTest ? '' : `/${data.id}`), options);
  }

  all(data?: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();

    if (data) {
      options.params = new HttpParams();
      Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
          options.params = options.params.set(key, data[key]);
        }
      });
    }

    return this.getHttpClient().get<any>(`${this.URI}`, options);
  }

  save(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    // New
    if (!data.id) {
      return this.getHttpClient().post<any>(this.URI, data, options);
    }

    // Update
    return this.getHttpClient().put<any>(`${this.URI}` + (this.unitTest ? '' : `/${data.id}`), data, options);
  }

  patch(id: number, data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (data) {
      Object.keys(data).forEach(keyP => {
        if ((data[keyP] !== null && data[keyP] !== undefined) || typeof data[keyP] === 'number') {
          options.params = options.params.set(keyP, data[keyP]);
        }
      });
    }

    // New
    if (!id) {
      return this.getHttpClient().patch<any>(`${this.URI}`, data, options);
    }

    // Update
    return this.getHttpClient().patch<any>(`${this.URI}` + (this.unitTest ? '' : `/${id}`), data, options);
  }

  remove(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (data.id) {
      return this.getHttpClient().delete<any>(`${this.URI}/${data.id}`, options);
    }

    return;
  }

}
