import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalEditDialogComponent} from './modal-edit-dialog.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';

// No tests were created
describe('ModalEditDialogComponent', () => {
  let component: ModalEditDialogComponent;
  let fixture: ComponentFixture<ModalEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditDialogComponent],
      imports: [MatButtonModule, MatMenuModule, HttpClientModule, TranslateModule.forRoot({
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
    fixture = TestBed.createComponent(ModalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
