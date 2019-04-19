import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMenuComponent } from './language-menu.component';
import {TranslateService} from '@ngx-translate/core';

describe('LanguageMenuComponent', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageMenuComponent ],
      providers: [TranslateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should has initial language'`, () => {
    component.ngOnInit();
    expect(component.getLanguage()).toEqual('en');
  });
});
