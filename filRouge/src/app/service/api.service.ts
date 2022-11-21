import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {Personnage} from "../interface/personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import { AuthStatus } from '../interface/auth-status';



@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/connection';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/logout';

  private authStatus = new BehaviorSubject<AuthStatus>({logged : false});
  authStatus$ = this.authStatus.asObservable();

  authenticate() : void {
    const headers = new HttpHeaders(this.authStatus.value.logged ? {
      authorization : 'Basic ' + window.btoa(this.authStatus.value.personnage!.mail + ':' + this.authStatus.value.personnage!.password)
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

  envoyerStatus(authStatus :AuthStatus){
    this.authStatus.next(authStatus);
  }

}