import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import {PersonService} from './person.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([PersonService], (personService: PersonService) => {
    expect(personService).toBeTruthy();
  }));
  it('should get person', fakeAsync(
    inject([PersonService, HttpTestingController],
      (personService: PersonService, backend: HttpTestingController) => {
        let response = null;
        const mockData = {
          id: 0, name: 'name0', surname: 'surname0', birth: '12-10-1999', phone: '999333322',
          address: 'Poznan, Dluga 5'
        };
        personService.getPeople().subscribe(data => response = data);
        const requestWrapper = backend.expectOne({url: 'api/people'});
        requestWrapper.flush(mockData);
        expect(requestWrapper.request.method).toEqual('GET');
        expect(response).toEqual(mockData);
      }
    )
  ));
});
