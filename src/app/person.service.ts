import {Injectable} from '@angular/core';
import {PersonModel} from './person.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private serviceUrl = 'api/people';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {

  }

  public getPeople(): Observable<PersonModel[]> {
    console.log(`%c Got People`, {color: 'green'});
    return this.http.get<PersonModel[]>(this.serviceUrl);
  }

  public updatePerson(person: PersonModel): Observable<any> {
    console.log(`%c Updated Person ${person.id}`, {color: 'green'});
    return this.http.put(this.serviceUrl, person, this.httpOptions);
  }

  public deletePerson(person: PersonModel | number): Observable<PersonModel> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.serviceUrl}/${id}`;
    console.log(`%c Deleted person ${id}`, {color: 'green'});
    return this.http.delete<PersonModel>(url, this.httpOptions);
  }
}
