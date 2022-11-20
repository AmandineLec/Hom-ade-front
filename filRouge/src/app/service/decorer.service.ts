import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecorerService {

  constructor() { }
  valeur: string = "";
  private evenement = new Subject<string>();
  evenement$ = this.evenement.asObservable();
}
