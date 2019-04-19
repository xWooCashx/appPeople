import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TranslateService} from '@ngx-translate/core';
import {PeopleTableComponent} from './people-table/people-table.component';
import {LanguageMenuComponent} from './language-menu/language-menu.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSelectModule, MatTableModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PeopleTableComponent,
        LanguageMenuComponent
      ],
      providers: [TranslateService],
      imports: [MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule
      ]
    }).compileComponents();
  }));

  it(`should have as title 'appPeople'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AppPeople');
  });
});
