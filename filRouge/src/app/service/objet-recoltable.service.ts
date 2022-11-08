import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjetRecoltable } from '../interface/objet-recoltable';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjetRecoltableService {
  private objetRecoltableUrl = '';

  constructor(private http: HttpClient) { }

  getObjetsRecoltables(): Observable<ObjetRecoltable[]> {
    return this.http.get<ObjetRecoltable[]>(this.objetRecoltableUrl)
    .pipe(
      catchError(this.handleError<ObjetRecoltable[]>('getObjetsRecoltables', []))
    );
  }

  getObjetRecoltable(id: number): Observable<ObjetRecoltable> {
    const url = '${this.objetRecoltableUrl}/${id}';
    return this.http.get<ObjetRecoltable>(url).pipe(
      catchError(this.handleError<ObjetRecoltable>('getObjetRecoltable id=${id}'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }
  
}
