import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventaireRessource } from '../interface/inventaire-ressource';
import { InventaireObjet } from '../interface/inventaire-objet';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  constructor(private http :HttpClient) { }

  inventaireRessource: InventaireRessource[] = [];
  inventaireObjet :InventaireObjet[] = [];

  inventaireRUrl = "http://localhost:8080/api/InventaireRessource";
  inventaireOUrl = "http://localhost:8080/api/InventaireObjet";
  OutilInventaire = "http://localhost:8080/api/equiper?id=";

  getInventaireRessource() :Observable<InventaireRessource[]> {
    return this.http.get<InventaireRessource[]>(this.inventaireRUrl, {withCredentials: true});
  }

  getInventaireObjet() :Observable<InventaireObjet[]> {
    return this.http.get<InventaireObjet[]>(this.inventaireOUrl, {withCredentials: true});
  }

  getOutilEquiper(id :number) :Observable<Boolean> {
    console.log(this.OutilInventaire +id);
    return this.http.get<Boolean>(this.OutilInventaire + id, {withCredentials : true});
  }
}
