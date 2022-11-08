import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Personnage} from "./personnage";

@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService {
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/se_connecter';
  constructor(private http: HttpClient) { }

   register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage);
  }
  /*ce sera pour avoir les infos du compte
  getPersonnageById(id: number): Observable<Object> {
    return this.http.get(`${this.inscription}/personnage/${id}`);
  }*/

  /*login(personnage: Personnage): Observable<Personnage>{
   return this.http.post<Personnage>(this.connection,personnage);
 }*/
   isPersonnage(obj : any): obj is Personnage{
    return "pseudo" in obj;
  }


}
