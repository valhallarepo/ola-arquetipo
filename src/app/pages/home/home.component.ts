import { Component, OnInit } from '@angular/core';
import { HomeModel } from './model/home.model';
import { HomeService } from './services/home.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todo: string;

  public exampleForm: FormGroup;

  constructor(
    private homeService: HomeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTodos(1).subscribe(res => {
      this.todo = res.title;
    });
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: '',
      endereco: ['', [Validators.required]],
      cidade: '',
      estado: ''
    });
  }

  public getTodos(id: number): Observable<any> {
    return this.homeService.get({ id: id });
  }

}
