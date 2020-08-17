import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private globalTheme = new Subject<string>();
  globalThemeObservable = this.globalTheme.asObservable();

  setGlobalTheme(theme: string): void {
    this.globalTheme.next(theme);
  }

}
