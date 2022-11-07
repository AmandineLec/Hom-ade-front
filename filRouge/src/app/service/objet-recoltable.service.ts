import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjetRecoltable } from '../interface/objet-recoltable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetRecoltableService {
  private objetRecoltableUrl = '';

  constructor(private http: HttpClient) { }

  getObjetsRecoltables(): Observable<ObjetRecoltable[]> {
    return this.http.get<ObjetRecoltable[]>(this.objetRecoltableUrl);
  }

  
}
