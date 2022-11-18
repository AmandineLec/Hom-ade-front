import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Personnage} from "../personnage"
import {ActivatedRoute, Router} from "@angular/router";
import {AuthStatus} from "../auth-status";




@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  authenticated = false;
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/connection';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/logout';

  authStatus : AuthStatus = {
    logged : false
  };
  private personnage = new Subject<Personnage>();

  PersoEnvoye$ = this.personnage.asObservable();

  isPersonnage(perso : any) : perso is Personnage{
    return "mail" in perso;
  }

  register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage);
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }

  login(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.connection, personnage, {withCredentials : true});
  }

  redirectToAccount() {
    this.router.navigateByUrl('/account');
  }

  logout() : Observable<Personnage>{
    return this.http.post<Personnage>(this.deconnection, {withCredentials : true});
  }

  envoyerUser(personnage :Personnage){
    this.personnage.next(personnage);
  }
  
}
