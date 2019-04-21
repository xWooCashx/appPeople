import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMenuComponent } from './language-menu.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpLoaderFactory} from '../app.module';

describe('LanguageMenuComponent', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageMenuComponent],
      imports: [MatButtonModule, MatMenuModule, HttpClientModule,  TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should has initial language = 'en'`, () => {
    expect(component.getLanguage()).toEqual('en');
  });
});
