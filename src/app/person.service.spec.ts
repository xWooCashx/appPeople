import {TestBed} from '@angular/core/testing';

import {PersonService} from './person.service';

let httpClientSpy: { get: jasmine.Spy };
let personService: PersonService;
describe('PersonService', () => {
  beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      personService = new PersonService( <any> httpClientSpy);
    }
  );
  it('should be created', () => {
    expect(personService).toBeTruthy();
  });
})
;
