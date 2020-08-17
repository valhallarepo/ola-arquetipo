import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todo: string;

  public exampleForm: FormGroup;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getTodos(1).subscribe(res => {
      this.todo = res.title;
    });
    this.createForm();
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
    return this.homeService.get({ id: id });
  }

}
