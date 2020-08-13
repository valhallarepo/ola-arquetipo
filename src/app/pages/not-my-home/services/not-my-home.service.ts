import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class NotMyHomeService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super('posts', httpClient)
  } 
  
}
