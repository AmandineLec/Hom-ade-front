import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjetRecoltable } from '../interface/objet-recoltable';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjetRecoltableService {
  private objetRecoltableUrl = 'http://localhost:8080/api/';
  objetsRecoltables: ObjetRecoltable[] = [];

  constructor(private http: HttpClient) { 
    this.getObjetsRecoltables().subscribe((objetsRecoltables) => {
      this.objetsRecoltables = objetsRecoltables;
    });
    for(let i = 0; i < this.objetsRecoltables.length; i++)
      this.objetsRecoltables[i].index = i;
  }

  getObjetsRecoltables(): Observable<ObjetRecoltable[]> {
    return this.http.get<ObjetRecoltable[]>(`${this.objetRecoltableUrl}` + 'recoltables');
    // .pipe(
    //   catchError(this.handleError<ObjetRecoltable[]>('getObjetsRecoltables', []))
    // );
  }

  getObjetRecoltable(index: number): ObjetRecoltable {
    this.getObjetsRecoltables().subscribe((objetsRecoltables) => {
      this.objetsRecoltables = objetsRecoltables;
    })

    return this.objetsRecoltables[index];

    // const url = '${this.objetRecoltableUrl}/${id}';
    // return this.http.get<ObjetRecoltable>(url).pipe(
    //   catchError(this.handleError<ObjetRecoltable>('getObjetRecoltable id=${id}'))
    // );
  }

  recolte(index: number): Observable<ObjetRecoltable> {
    const url: string = this.objetRecoltableUrl + 'recolte?index=' + index;
    return this.http.get<ObjetRecoltable>(url);
      // .pipe(
      //   catchError(this.handleError<ObjetRecoltable>('recolte'))
      // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }

}
