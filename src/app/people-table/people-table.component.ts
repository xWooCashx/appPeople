import {Component, OnInit} from '@angular/core';
import {PersonModel} from '../person.model';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  // Source for table
  dataSource$: PersonModel[];
  // True if data is being edited
  editing: boolean;
  // Tells which rows should contain input field
  toEdit: boolean[];
  // 2-way data binding with Checkboxes in every row
  selected: boolean[];
  // Displayed columns in table
  displayedColumns = ['checkboxEdit', 'id', 'name', 'surname', 'birth', 'phone', 'address', 'buttons'];

  constructor(private personService: PersonService) {
    this.editing = false;
  }

  ngOnInit() {
    // Gets data from server on Initialization
    this.personService.getPeople().subscribe(data => {
      this.dataSource$ = data;
      this.fillBooleanArray();
    });
  }

  // Creates arrays with length equal to dataSource's length and fills them with false values
  fillBooleanArray() {
    this.toEdit = new Array(this.dataSource$.length);
    this.selected = new Array(this.dataSource$.length);
    this.toEdit.fill(false, 0, this.toEdit.length);
    this.selected.fill(false, 0, this.selected.length);
  }

  // Uses service to send delete request
  delete(user: any, id: number): void {
    // Filters data to delete chosen row ( User-side )
    this.dataSource$ = this.dataSource$.filter(u => u !== user);
    // Service send delete request ( Server-side )
    this.personService.deletePerson(id);
    // Refill array
    this.fillBooleanArray();
  }

  // Edits specific row and updates data via service
  edit(index: any): void {
    // Checks if row is already being edited
    if (this.toEdit[index]) {
      this.personService.updatePerson(this.dataSource$[index]);
    }
    this.toEdit[index] = !this.toEdit[index];
  }

  // Calls 'edit' function on selected elements
  editSelected(): void {
    for (const i in this.toEdit) {
      if (this.selected[i]) {
        this.toEdit[i] = true;
        if (this.editing) {
          this.edit(i);
        }
      }
    }
    this.editing = !this.editing;
  }
}
