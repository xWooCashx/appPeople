import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {
  // Translation stored in 'assets/i18n' directory
  constructor(private translate: TranslateService) {
    this.setLanguage('en');
  }

  ngOnInit() {
  }
  // Sets Default Language for Translation Service
  public setLanguage(language: string): void {
    this.translate.setDefaultLang(language);
  }
  // Gets default language
  public getLanguage(): string {
    return this.translate.getDefaultLang();
  }
}
