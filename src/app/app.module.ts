import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatSelectModule, MatTableModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PeopleTableComponent} from './people-table/people-table.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {PersonService} from './person.service';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LanguageMenuComponent} from './language-menu/language-menu.component';
import { ModalEditComponent } from './people-table/modal-edit/modal-edit.component';
import { ModalEditDialogComponent } from './people-table/modal-edit-dialog/modal-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleTableComponent,
    LanguageMenuComponent,
    ModalEditComponent,
    ModalEditDialogComponent
  ],
  entryComponents:[ModalEditDialogComponent],
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
