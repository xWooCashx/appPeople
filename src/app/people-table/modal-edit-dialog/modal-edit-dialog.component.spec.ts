import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDialogComponent } from './modal-edit-dialog.component';

describe('ModalEditDialogComponent', () => {
  let component: ModalEditDialogComponent;
  let fixture: ComponentFixture<ModalEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
