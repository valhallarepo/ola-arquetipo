import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService {

  constructor(
    public httpClient: HttpClient
  ) {
    super('todos', httpClient);
  }

}
