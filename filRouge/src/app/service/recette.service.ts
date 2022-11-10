import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Recette } from '../interface/recette';
import { Observable } from 'rxjs';
import { Objet } from '../interface/objet';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  objet :Objet[] = []; 
  recetteUrl ="http://localhost:8080/api/recetteOutils";
  constructor( private httpClient :HttpClient) { }

  getRecette() :Observable<Objet[]> {
    return this.httpClient.get<Objet[]>(this.recetteUrl); 
  }

  add(recette :Objet) {
    this.objet.push(recette);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  // remove(id :number){
  //   this.recettes = this.recettes.filter(x=>x.id !==id);
  // }

}
