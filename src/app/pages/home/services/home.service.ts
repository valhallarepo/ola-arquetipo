import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { HomeModel } from '../../home/model/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService<HomeModel> {

  constructor(
    public httpClient: HttpClient
  ) {
    super('todos', httpClient);
  }

}
