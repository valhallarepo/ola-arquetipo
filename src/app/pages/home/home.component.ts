import { Component, OnInit } from '@angular/core';
import { HomeModel } from './model/home.model';
import { HomeService } from './services/home.service';

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

  private getTodos(id: number): void {
    this.homeService.get({ id: id }).subscribe(res => {
      this.todo = (res as HomeModel).title
    }, err => {
      console.log(err);
    });
  }

  public temQueSerTrzue(): boolean {
    return true;
  }

}
