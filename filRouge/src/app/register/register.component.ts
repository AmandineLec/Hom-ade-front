import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Personnage} from "../personnage";
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {'class' : 'outlet'}
})
export class RegisterComponent implements OnInit {

  constructor(private api : ApiService) { }
  
  persos!: Personnage[];

  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
  }

  personnage : FormGroup = new FormGroup({
    name:new FormControl('' , [Validators.required]),
    sexe:new FormControl('' , [Validators.required]),
    mail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  onSubmit() {
    this.api.register(this.personnage.value).subscribe((perso) => {
      if(this.api.isPersonnage(perso)){
        this.submitted = true;
        this.api.redirectTologin();
        console.warn(this.personnage.value);
      }
    })
  }
}
