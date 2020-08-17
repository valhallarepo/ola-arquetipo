import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroy } from 'src/app/core/take-until-destroy';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  globalTheme: string;

  constructor(public translate: TranslateService,
    private themeService: ThemeService) {

    translate.addLangs(['pt-br', 'en', 'es']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en|es/) ? browserLang : 'pt-br');
  }

  ngOnInit() {
    this.themeService.globalThemeObservable
      .pipe(takeUntilDestroy(this))
      .subscribe(theme => {
        this.globalTheme = theme;
      });
  }

  ngOnDestroy(): void {
  }

}
