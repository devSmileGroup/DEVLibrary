import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BACKEND = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = '${this.BACKEND}/login';
    return this.http.post<User>(url, {email, password});
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BACKEND}/register`;
    return this.http.post<User>(url, {email, password});
  }
}
