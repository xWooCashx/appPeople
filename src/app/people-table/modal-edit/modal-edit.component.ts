import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PersonModel} from '../../person.model';
import {ModalEditDialogComponent} from '../modal-edit-dialog/modal-edit-dialog.component';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {
  // Input data for popup window
  @Input() person: PersonModel;

  constructor(public dialog: MatDialog) {
  }
 // Creates window and passes input data
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditDialogComponent, {
      width: '250px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.person = result;
    });
  }
}
