import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Personnage} from "./personnage";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
// this service will perform GET and POST requests to the http://localhost:8080/inscription endpoint.
export class ApiService  {
  private inscription = 'http://localhost:8080/inscription';
  private connection = 'http://localhost:8080/se_connecter';
  error500Message: string = "500 SERVER ERROR, put the blame on the administrator";


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if(error.status === 500){

      return this.error500Message;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

   register(personnage: Personnage): Observable<Personnage>{
    return this.http.post<Personnage>(this.inscription, personnage)
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

// x-www-form-urlencoded
}
