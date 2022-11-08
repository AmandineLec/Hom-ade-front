import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Recette } from '../interface/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  recetteUrl ="http://localhost:8080/recetteOutils?";
  constructor( private httpClient :HttpClient) { }

  getRecette() :Observable<Recette[]> {
    return this.httpClient.jsonp<Recette[]>(this.recetteUrl, 'callback').pipe();
  }
}
