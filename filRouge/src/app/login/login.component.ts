import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../service/api.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class' : 'outlet'}
})
export class LoginComponent implements OnInit {
  submitted = false;
credentials: any;

  constructor(private api : ApiService) { }
  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.submitted=false;
  }
  onSubmit() {
    // perso bien enrégsitré en bdd mais lors de la connection affiche "id incorrects"
    this.api.login(this.personnage.value as Personnage).subscribe((perso) => {
      console.warn(this.personnage.value);
      if(this.api.isPersonnage(perso)){
        this.submitted = true;
      }
      console.warn(this.personnage.value);
      this.api.redirectToAccount();
    })
  }

}
