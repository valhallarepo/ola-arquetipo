import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  globalTheme: string;

  constructor(public translate: TranslateService,
    private themeService: ThemeService) {

    translate.addLangs(['pt-br', 'en', 'es']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en|es/) ? browserLang : 'pt-br');
  }

  ngOnInit() {
    this.themeService.globalThemeObservable.subscribe(theme => {
      this.globalTheme = theme;
    });
  }

}
