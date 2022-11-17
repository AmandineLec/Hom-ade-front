import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Personnage} from "../personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {LogStatus} from "../log-status";


@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/login';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/accueil_connexion';
  headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  authenticated: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage);
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }

  login(personnage: Personnage): Observable<Personnage>{
  return this.http.post<Personnage>(this.connection,personnage,{withCredentials : true}); // withCredentials : true  pour que l'appel utilise les cookies. Peut être stocker les infos du perso ?
  }

  redirectToAccount() {
    this.router.navigateByUrl('/acount');
  }

  getPersonnageInfos(): Observable<Personnage>{
    return this.http.get<Personnage>(this.account, {withCredentials : true});
  }


   isPersonnage(obj : any): obj is Personnage{
    return "mail" in obj;
  }

  logout() : Observable<Personnage>{
    return this.http.post<Personnage>(this.deconnection, {withCredentials : true});
  }

  authenticate(credentials: any, callback: any) {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response) {
        this.authenticated = true;
      }
      else {
        this.authenticated = false;
      }
      return callback && callback();
  });
  }
}
