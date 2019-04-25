import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { IUser } from '../models/User';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private usersUrl = 'assets/data/users.json';
  private baseUrl: string;

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/${this.usersUrl}`)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUsersB() {
    // return this.http.get<IUser[]>(`${this.baseUrl}/${this.usersUrl}`);
  }

  getUser(user: IUser) {
    return this.http.get<IUser>(`${this.baseUrl}/api/users/` + user.id);
  }

  deleteUser(user: IUser) {
    return this.http.delete<IUser>(`${this.baseUrl}/api/users/` + user.id);
  }

  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.baseUrl}/api/users/` + user.id, user);
  }

  addUser(newUserName: string) {
    return this.http.post<IUser>(`${this.baseUrl}/api/users`, {
      name: newUserName
    });
  }

  private handleError(err: HttpErrorResponse) {
    // we may send the server to some remote Logger service
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
