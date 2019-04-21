import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleTableComponent} from './people-table.component';

// No tests were created
describe('PeopleTableComponent', () => {
  let component: PeopleTableComponent;
  let fixture: ComponentFixture<PeopleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
