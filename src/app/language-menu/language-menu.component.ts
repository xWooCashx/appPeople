import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  setLanguage(language: string): void {
    this.translate.setDefaultLang(language);
  }
}
