import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {PersonModel} from './person.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Mock data
    const people = [
      {
        id: 0, name: 'name0', surname: 'surname0', birth: '12-10-1999', phone: '999333322',
        address: 'Poznan, Dluga 5'
      },
      {
        id: 1, name: 'name1', surname: 'surname1', birth: '12-4-1941', phone: '543123444',
        address: ' Warsaw, Woloska 22'
      },
      {
        id: 2, name: 'name2', surname: 'surname2', birth: '14-12-1229', phone: '654876612',
        address: 'Minsk, Vulitsa 10'
      },
      {
        id: 3, name: 'name3', surname: 'surname3', birth: '2-1-1912', phone: '541255211',
        address: 'Torun, Torunska 1'
      },
      {
        id: 4, name: 'name4', surname: 'surname4', birth: '15-12-2011`', phone: '6312431231',
        address: 'Warsaw, Woloska 22'
      }
    ];
    return {people};
  }

  // Useful in creating new records.
  // Overrides the genId method to ensure that a person always has an id.
  // If the people array is empty,
  // the method below returns the initial number (0).
  // if the people array is not empty, the method below returns the highest
  // person id + 1.
  genId(people: PersonModel[]): number {
    return people.length > 0 ? Math.max(...people.map(person => person.id)) + 1 : 0;
  }
}
