import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BaseModel } from '../../core/model/base.model';
import { AbstractBaseService } from './abstract-base.service';

export class BaseService<T extends BaseModel> extends AbstractBaseService<T> {

  constructor(resource: string, httpClient: HttpClient) {
    super(resource, httpClient);
  }

  get(data: T): Observable<T> {
    const options = this.getHttpHeaderOptionToken();
    return this.getHttp().get<T>(`${this.getServerURL()}/${data.id}`, options as Object);
  }

  all(data?: T): Observable<Array<T>> {
    const options = this.getHttpHeaderOptionToken();

    if (data) {
      options.params = new HttpParams();
      Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
          options.params = options.params.set(key, data[key]);
        }
      });
    }

    return this.getHttp().get<Array<T>>(`${this.getServerURL()}`, options as Object);
  }

  save(data: T): Observable<T> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    // New
    if (!data.id) {
      return this.getHttp().post<T>(this.getServerURL(), data, options as Object);
    }

    // Update
    return this.getHttp().put<T>(`${this.getServerURL()}/${data.id}`, data, options as Object);
  }

  patch(id: number, data: T): Observable<T> {
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
      return this.getHttp().patch<T>(`${this.getServerURL()}`, data, options as Object);
    }

    // Update
    return this.getHttp().patch<T>(`${this.getServerURL()}/${id}`, data, options as Object);
  }

  remove(data: T): Observable<T> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (data.id) {
      return this.getHttp().delete<T>(`${this.getServerURL()}/${data.id}`, options as Object);
    }

    return;
  }

}
