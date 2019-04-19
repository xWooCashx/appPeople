import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../person.model';
import {PersonService} from '../person.service';
@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
   dataSource$: PersonModel[];
   editting: boolean;
   toEdit: boolean[];
   selected: boolean[];
   displayedColumns = ['checkboxEdit', 'id', 'name', 'surname', 'birth', 'phone', 'address', 'buttons'];
  constructor( private personService: PersonService) {
    this.editting = false;
  }

  ngOnInit() {
    this.personService.getPeople().subscribe(data => { this.dataSource$ = data; this.fillBooleanArray();
    });
  }
  fillBooleanArray() {
    this.toEdit =  new Array(this.dataSource$.length);
    this.selected = new Array(this.dataSource$.length);
    this.toEdit.fill(false, 0, this.toEdit.length);
    this.selected.fill(false, 0, this.selected.length);
  }
  delete(user: any, id: number): void {
    this.dataSource$ = this.dataSource$.filter(u => u !== user);
    this.personService.deletePerson(id);
    this.fillBooleanArray();
  }
  edit(index: any): void {
    if (this.toEdit[index]) {
      this.personService.updatePerson(this.dataSource$[index]);
    }
    this.toEdit[index] = !this.toEdit[index];
  }
  editSelected(): void {
    for ( const i in this.toEdit) {
      if (this.selected[i]) {
        this.toEdit[i] = true;
        if (this.editting ) {
          this.edit(i);
        }
      }
    }
    this.editting = !this.editting;
  }
}
