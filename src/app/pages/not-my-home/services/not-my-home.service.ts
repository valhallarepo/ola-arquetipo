import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { NotMyHomeModel } from '../model/not-my-home.model';

@Injectable({
  providedIn: 'root'
})
export class NotMyHomeService extends BaseService<NotMyHomeModel> {

  constructor(private httpClient: HttpClient) {
    super('posts', httpClient)
  }

}
