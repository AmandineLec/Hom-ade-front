import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objet } from '../interface/objet';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  objet :Objet[] = []; 
  outilsUrl ="http://localhost:8080/api/recetteOutils";
  meublesUrl = "http://localhost:8080/api/recetteMeubles";
  decosUrl = "http://localhost:8080/api/recetteDecos"; 
  objetUrl = "http://localhost:8080/api/recettes?id=";

  constructor( private httpClient :HttpClient) { }

  getOutils() :Observable<Objet[]> {
    return this.httpClient.get<Objet[]>(this.outilsUrl); 
  }

  getMeubles() :Observable<Objet[]>{
    return this.httpClient.get<Objet[]>(this.meublesUrl);
  }

  getDecos() :Observable<Objet[]>{
    return this.httpClient.get<Objet[]>(this.decosUrl);
  }

  
  getObjet(id:number) :Observable<Objet>{
    return this.httpClient.get<Objet>(this.objetUrl + id);
  }
}
