import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { AppConfig } from '../../app.config';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  public mobileQuery: MediaQueryList;

  form: FormGroup;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private formBuider: FormBuilder,
    private media: MediaMatcher,
    private themeService: ThemeService) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(() => this.changeDetectorRef.detectChanges());
  }
  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeService.setGlobalTheme(AppConfig.DEFAULT_THEME);
      this.form.get('colorTheme').setValue(AppConfig.DEFAULT_THEME);
    });
  }

  private createForm() {
    this.form = this.formBuider.group({
      colorTheme: new FormControl()
    });
  }

  themeChange($event: MatRadioChange) {
    this.themeService.setGlobalTheme($event.value);
  }

}
