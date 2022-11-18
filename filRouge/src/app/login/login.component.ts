import { Component, OnInit } from '@angular/core';
import{ApiService} from "../service/api.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class' : 'outlet'}
})
export class LoginComponent implements OnInit {
credentials: any;

  constructor(private api : ApiService, private router :Router) {

  }
  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  onSubmit() {
    this.api.login(this.personnage.value).subscribe(response => {
        if (this.api.isPersonnage(response)) {
          this.api.authStatus.logged = true;
          console.log(this.api.authStatus.logged);
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

  }
}
