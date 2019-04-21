import {Injectable} from '@angular/core';
import {PersonModel} from './person.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // Server URL
  private serviceUrl = 'api/people';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {

  }

  // Retrieves data
  public getPeople(): Observable<PersonModel[]> {
    console.log(`%c Got People`, {color: 'green'});
    return this.http.get<PersonModel[]>(this.serviceUrl);
  }

  // Updates data
  public updatePerson(person: PersonModel): Observable<any> {
    console.log(`%c Updated Person ${person.id}`, {color: 'green'});
    return this.http.put(this.serviceUrl, person, this.httpOptions);
  }

  // Deletes data
  public deletePerson(person: PersonModel | number): Observable<PersonModel> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.serviceUrl}/${id}`;
    console.log(`%c Deleted person ${id}`, {color: 'green'});
    return this.http.delete<PersonModel>(url, this.httpOptions);
  }
}
