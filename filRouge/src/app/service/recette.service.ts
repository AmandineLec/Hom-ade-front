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
  recetteUrl = "http://localhost:8080/api/recettes?id=";
  objetUrl = "http://localhost:8080/api/creation?id=";

  constructor( private httpClient :HttpClient) { }

  getOutils() :Observable<Objet[]> {
    return this.httpClient.get<Objet[]>(this.outilsUrl, {withCredentials: true}); 
  }

  getMeubles() :Observable<Objet[]>{
    return this.httpClient.get<Objet[]>(this.meublesUrl, {withCredentials: true});
  }

  getDecos() :Observable<Objet[]>{
    return this.httpClient.get<Objet[]>(this.decosUrl, {withCredentials: true});
  }
  
  getRecette(id:number) :Observable<Objet>{
    return this.httpClient.get<Objet>(this.recetteUrl + id, {withCredentials: true});
  }

  getObjet(id :number):Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.objetUrl +id, {withCredentials: true});
  }

}
