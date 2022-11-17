import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Personnage} from "./personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {LogStatus} from "./log-status";


@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/connection';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/accueil_connexion';
   headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  /*https://www.journaldunet.fr/web-tech/developpement/1441195-behaviorsubject-vs-observable/#:~:text=Les%20classes%20%22Subject%22%20et%20%22,utilis%C3%A9s%20par%20le%20framework%20Angular.
  https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  private personnageActuel = new BehaviorSubject<LogStatus>({
    logged : false // perso non connecté par défaut
  });
  pObservable = this.personnageActuel.asObservable() // est ce pour observer le statut du personnageActuel ?
   */

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

   register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage);
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }
  // https://stackoverflow.com/questions/27406994/http-requests-withcredentials-what-is-this-and-why-using-it
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
  //https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
  // https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
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

  /*setAuthStatus(auth : LogStatus){
    this.personnageActuel.next(auth);
  }

  getCurrentUser() : LogStatus{
    return this.personnageActuel.value;
  }
  isConnected() : boolean {
    return this.personnageActuel.value.logged;
  }

   */

}
