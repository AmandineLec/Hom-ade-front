import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjetRecoltable } from '../interface/objet-recoltable';
import { Observable, of, pipe } from 'rxjs';

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
    for (let i = 0; i < this.objetsRecoltables.length; i++)
      this.objetsRecoltables[i].index = i;
  }

  getObjetsRecoltables(): Observable<ObjetRecoltable[]> {
    return this.http.get<ObjetRecoltable[]>(`${this.objetRecoltableUrl}` + 'recoltables', {withCredentials: true});      
  }

  getObjetRecoltable(index: number): ObjetRecoltable {
    this.getObjetsRecoltables().subscribe((objetsRecoltables) => {
      this.objetsRecoltables = objetsRecoltables;
    })

    return this.objetsRecoltables[index];

  }

  recolte(index: number): Observable<ObjetRecoltable> {
    const url: string = this.objetRecoltableUrl + 'recolte?index=' + index;
    return this.http.get<ObjetRecoltable>(url, {withCredentials: true});    
  }



}
