import { Component, OnInit } from '@angular/core';
import {Personnage} from "../interface/personnage";
import{ApiService} from "../service/api.service";
import {Observable, Subscription} from "rxjs";
import { Router } from '@angular/router';

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

  constructor(private api : ApiService, private router :Router) { }

  ngOnInit(): void {
      // this.sub = this.api.PersoEnvoye$.subscribe((perso)=> {
      // this.persoSub = perso; 
    // })
  }
  // ngOnDestroy():void {
  //   this.sub.unsubscribe();
  // }
}
