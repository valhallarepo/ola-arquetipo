import { Component, OnInit } from '@angular/core';
import { HomeModel } from './model/home.model';
import { HomeService } from './services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todo: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getTodos(1);
  }

  public getTodos(id: number): Observable<any> {
    return this.homeService.get({ id: id });
  }

}
