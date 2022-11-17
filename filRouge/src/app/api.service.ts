import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Personnage} from "./personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {LogStatus} from "./log-status";
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthStatus } from './auth-status';



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


  authenticate() : void {
    const headers = new HttpHeaders(this.authStatus.logged ? {
      authorization : 'Basic ' + window.btoa(this.authStatus.personnage!.mail + ':' + this.authStatus.personnage!.password)
    } : {});

    this.http.get<Personnage>(this.account+'api/recetteOutils', {withCredentials : true, headers : headers}).subscribe()

  }

  isPersonnage(perso : any) : perso is Personnage{
    return "mail" in perso;
  }
  /*https://www.journaldunet.fr/web-tech/developpement/1441195-behaviorsubject-vs-observable/#:~:text=Les%20classes%20%22Subject%22%20et%20%22,utilis%C3%A9s%20par%20le%20framework%20Angular.
  https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  private personnageActuel = new BehaviorSubject<LogStatus>({
    logged : false // perso non connecté par défaut
  });
  pObservable = this.personnageActuel.asObservable() // est ce pour observer le statut du personnageActuel ?
   */

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
    return this.http.post<Personnage>(this.connection, personnage, {withCredentials : true});
  }

 /*test(){
   this.http
     .post(this.connection,this.body,{headers :this.headers})
     .subscribe(response => {
       console.warn(this.body.toString())
       this.redirectToAccount();
     })
 }
  */


  redirectToAccount() {
    this.router.navigateByUrl('/acount');
  }

  getPersonnageInfos(): Observable<Personnage>{
    return this.http.get<Personnage>(this.account, {withCredentials : true});
  }


  logout() : Observable<Personnage>{
    return this.http.post<Personnage>(this.deconnection, {withCredentials : true});
  }


}
