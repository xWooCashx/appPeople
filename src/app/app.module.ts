import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule, MatTableModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PeopleRowComponent } from './people-row/people-row.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleTableComponent,
    PeopleRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
