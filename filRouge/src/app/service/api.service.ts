import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Personnage} from "./personnage";
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {LogStatus} from "./log-status";
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  authenticated = false;
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/login';
  private account = 'http://localhost:8080/';
  private deconnection = 'http://localhost:8080/accueil_connexion';
  //private body = `mail=${this.personnage.value.mail}&password=${this.personnage.value.password}`;

  authenticate(credentials: any, callback: any) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });


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

  login(personnage: Personnage): Observable<Personnage>{
  return this.http.post<Personnage>(this.connection,{
    name: personnage.mail,
    password: personnage.password
  },{withCredentials : true}); // withCredentials : true  pour que l'appel utilise les cookies. Peut être stocker les infos du perso ?
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
    this.router.navigateByUrl('/account');
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
