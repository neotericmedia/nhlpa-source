import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { INews } from '../models/News';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class NewsService {
  private newsUrl = 'assets/data/news.json';
  private baseUrl: string;

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.baseUrl}/${this.newsUrl}`)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
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
