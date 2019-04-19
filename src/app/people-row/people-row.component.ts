import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-people-row',
  templateUrl: './people-row.component.html',
  styleUrls: ['./people-row.component.scss']
})
export class PeopleRowComponent implements OnInit {

@Input() person: any;
  constructor() { }

  ngOnInit() {
  }

}
