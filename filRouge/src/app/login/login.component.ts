import { Component, OnInit } from '@angular/core';
import {Personnage} from "../interface/personnage";
import{ApiService} from "../service/api.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { Joueur } from '../interface/joueur';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor(private api : ApiService, private router :Router) {

  }
  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.submitted=false;
  }
  onSubmit() {
    // perso bien enrégsitré en bdd mais lors de la connection affiche "id incorrects"
    this.api.login(this.personnage.value).subscribe(response => {
        if (this.api.isPersonnage(response)) {
          this.api.authStatus.logged = true;
          this.api.authStatus.personnage = response;
          this.api.authenticate();
          this.api.envoyerPerso(response as Joueur);
          sessionStorage.setItem("personnage", JSON.stringify(response));
          this.router.navigateByUrl('/account');
        }
    },
    (error) => {
      console.warn("AAAAAAAAH C'EST PAS LE BON LOGIN");
      // Ici traiter les erreurs de connexion
    });

  //this.api.test();
  }
}
