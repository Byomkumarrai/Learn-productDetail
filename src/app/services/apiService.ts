import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServices {
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  getUserData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users', this.httpOptions);
  }
  UserData(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id, this.httpOptions);
 }


}
