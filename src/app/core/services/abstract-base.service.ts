import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export abstract class AbstractBaseService {

  private baseResource: string;
  private baseHttpClient: HttpClient;

  public request = {
    get(base: string, uri: string, options: any): Observable<any> {
      return null;
    }, api: {
      get(uri: string, options: any): Observable<any> {
        return this.request.get(environment.API_SERVER, uri, options);
      }
    }
  };

  constructor(resource: string, httpClient: HttpClient) {
    this.baseResource = resource;
    this.baseHttpClient = httpClient;
    this.request.get = (base: string, uri: string, options: any): Observable<any> => {
      return this.baseHttpClient.get(`${base}${uri}`, options);
    };
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

  getServerAPI(): string {
    return `${environment.API_SERVER}/${this.baseResource}`;
  }

  getHttpHeaderOptionToken(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

}
