import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Material Design Components
import {MatSelectModule, MatTableModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
// Created components
import {AppComponent} from './app.component';
import {PeopleTableComponent} from './people-table/people-table.component';
import {LanguageMenuComponent} from './language-menu/language-menu.component';
import {ModalEditComponent} from './people-table/modal-edit/modal-edit.component';
import {ModalEditDialogComponent} from './people-table/modal-edit-dialog/modal-edit-dialog.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
// Created services
import {PersonService} from './person.service';
// In-memory Server (Mock)
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
// Language switch mechanism
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    PeopleTableComponent,
    LanguageMenuComponent,
    ModalEditComponent,
    ModalEditDialogComponent
  ],
  entryComponents: [ModalEditDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true},
    ),
    // Translations stored in 'assets/i18n' directory
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
