import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  @Input() sidenavRef: any;

  form: FormGroup;

  theme: Observable<string>;

  constructor(private themeService: ThemeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.theme = this.themeService.theme;
    this.createForm();
    this.changeThemeSubscription();
  }

  ngAfterContentInit(): void {
    this.form.get('colorTheme').setValue('theme-blue-gray-dark');
  }

  private createForm() {
    this.form = this.formBuilder.group({
      colorTheme: new FormControl()
    });
  }

  private changeThemeSubscription() {
    this.form.get('colorTheme')
      .valueChanges.subscribe((theme) => {
        this.themeService.setGlobalTheme(theme);
      });
  }

}
