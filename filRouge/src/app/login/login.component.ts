import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api : ApiService) { }
  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  onSubmit() {
    this.api.login(this.personnage.value).subscribe((perso) => {
      if(this.api.isPersonnage(perso))
        console.warn(this.personnage.value);
      this.api.redirectToAccount();
    })
  }

}
