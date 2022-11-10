import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Personnage} from "./personnage";
import {LoginComponent} from "./login/login.component";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {NavigationExtras} from "@angular/router";
import {AcountComponent} from "./acount/acount.component";


@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/se_connecter';
  private account = 'http://localhost:8080/partie';


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

   register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage)
  }

  login(personnage: Personnage): Observable<Personnage>{
  return this.http.post<Personnage>(this.connection,personnage,{withCredentials : true})
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }

  getPersonnageInfos(): Observable<Personnage>{
    return this.http.get<Personnage>(this.account, {withCredentials : true})
  }

  redirectToAccount() {
    this.router.navigate(['/acount']);
  }

   isPersonnage(obj : any): obj is Personnage{
    return "pseudo" in obj;
  }

}
