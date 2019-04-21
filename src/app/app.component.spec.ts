import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {PeopleTableComponent} from './people-table/people-table.component';
import {LanguageMenuComponent} from './language-menu/language-menu.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpLoaderFactory} from './app.module';
import {ModalEditDialogComponent} from './people-table/modal-edit-dialog/modal-edit-dialog.component';
import {ModalEditComponent} from './people-table/modal-edit/modal-edit.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PeopleTableComponent,
        LanguageMenuComponent,
        ModalEditDialogComponent,
        ModalEditComponent
      ],
      providers: [TranslateService],
      imports: [MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    }).compileComponents();
  }));

  it(`should have as title 'appPeople'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AppPeople');
  });
});
