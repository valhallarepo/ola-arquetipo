import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService) {

    translate.addLangs(['pt-br', 'en', 'es']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en|es/) ? browserLang : 'pt-br');
  }

}
