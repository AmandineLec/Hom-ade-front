import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../service/api.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class' : 'outlet'}
})
export class LoginComponent implements OnInit {
  submitted = false;
credentials: any;

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
          this.router.navigateByUrl('/account');
          console.log(response)
          sessionStorage.setItem("user", JSON.stringify(response));
        }
    },
    (error) => {
      console.warn("AAAAAAAAH C'EST PAS LE BON LOGIN");
      // Ici traiter les erreurs de connexion
    });

  //this.api.test();
  }
}
