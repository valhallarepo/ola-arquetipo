import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BaseModel } from '../model/base.model';
import { AbstractBaseService } from './abstract-base.service';

export interface IBaseService {
  all(data?: BaseModel): Observable<BaseModel>;
  get(data: BaseModel): Observable<BaseModel>;
  save(data: BaseModel): Observable<BaseModel>;
  patch(id: number | string, data: BaseModel): Observable<BaseModel>;
  remove(data: BaseModel): Observable<BaseModel>;
}

export class BaseService extends AbstractBaseService implements IBaseService {

  constructor(resource: string, httpClient: HttpClient) {
    super(resource, httpClient);
  }

  all(data?: BaseModel, path?: string): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    if (data) {
      options.params = new HttpParams();
      Object.keys(data).forEach(key => {
        if ((data[key] !== null && data[key] !== undefined) || typeof data[key] === 'number') {
          options.params = options.params.set(key, data[key]);
        }
      });
    }
    return this.getHttpClient().get<any>(`${this.getServerAPI()}` + (path ? `/${path}` : ''), options);
  }

  get(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    return this.getHttpClient().get<any>(`${this.getServerAPI()}/${data.id}`, options);
  }

  save(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();
    if (data.id) {
      return this.getHttpClient().put<any>(`${this.getServerAPI()}/${data.id}`, data, options);
    }
    return this.getHttpClient().post<any>(this.getServerAPI(), data, options);
  }

  patch(id: number, data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();
    if (data) {
      options.params = new HttpParams();
      Object.keys(data).forEach(keyP => {
        if ((data[keyP] !== null && data[keyP] !== undefined) || typeof data[keyP] === 'number') {
          options.params = options.params.set(keyP, data[keyP]);
        }
      });
    }

    if (id) {
      return this.getHttpClient().patch<any>(`${this.getServerAPI()}/${id}`, data, options);
    } else {
      return this.getHttpClient().patch<any>(`${this.getServerAPI()}`, data, options);
    }
  }

  remove(data: BaseModel): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();
    if (data.id) {
      return this.getHttpClient().delete<any>(`${this.getServerAPI()}/${data.id}`, options);
    }
    return;
  }

}
