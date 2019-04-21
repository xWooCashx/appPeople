import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {PersonModel} from '../../person.model';
import {PersonService} from '../../person.service';

@Component({
  selector: 'app-modal-edit-dialog',
  templateUrl: './modal-edit-dialog.component.html',
  styleUrls: ['./modal-edit-dialog.component.scss']
})
export class ModalEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PersonModel, private personService: PersonService) {
    this.dialogRef.beforeClosed().subscribe(person => this.personService.updatePerson(person));
  }
}
