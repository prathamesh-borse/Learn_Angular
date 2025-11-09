import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root',
})
export class Registration {
  _url = "http://localhost:3000/enroll";

  constructor(private _http: HttpClient) { }

  register(userData: UserRegistration) {
    return this._http.post<any>(this._url, userData);
  }
}
