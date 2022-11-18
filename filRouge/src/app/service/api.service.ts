import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {Personnage} from "../personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import { AuthStatus } from '../auth-status';



@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {


  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/connection';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/logout';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  authStatus : AuthStatus = {
    logged : false
  };
  private personnage = new Subject<Personnage>();
  PersoEnvoye$ = this.personnage.asObservable();


  authenticate() : void {
    const headers = new HttpHeaders(this.authStatus.logged ? {
      authorization : 'Basic ' + window.btoa(this.authStatus.personnage!.mail + ':' + this.authStatus.personnage!.password)
    } : {});
    this.http.get<Personnage>(this.account,{withCredentials : true, headers : headers}).subscribe()
  }

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

  getPersonnageInfos(): Observable<Personnage>{
    return this.http.get<Personnage>(this.account, {withCredentials : true});
  }

  envoyerPerso(personnage :Personnage){
    this.personnage.next(personnage);
  }

}
