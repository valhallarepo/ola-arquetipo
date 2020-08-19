import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntilDestroy } from 'src/app/core/take-until-destroy';
import { HomeModel } from './model/home.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  todo: string;

  public exampleForm: FormGroup;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getTodos(1)
      .pipe(takeUntilDestroy(this))
      .subscribe(res => {
        this.todo = res.title;
      });
    this.createForm();
  }

  ngOnDestroy(): void {
  }


  createForm() {
    this.exampleForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl(),
      endereco: new FormControl('', Validators.required),
      cidade: new FormControl(),
      estado: new FormControl()
    });
  }

  public getTodos(id: number): Observable<any> {
    const params = new HomeModel();
    params.id = id;
    return this.homeService.get(params);
  }

}
