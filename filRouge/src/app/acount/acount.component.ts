import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {
  sub : Subscription = new Subscription();
  persoSub : Personnage = {
    name: "",
    sexe: "",
    mail: "",
    password : ""
  }

  constructor(private api : ApiService) { }

  ngOnInit(): void {
      this.sub = this.api.PersoEnvoye$.subscribe((perso)=> {
      this.persoSub = perso; 
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe();
  }
}
