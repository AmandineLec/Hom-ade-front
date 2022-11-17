import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private api : ApiService, private formbuilder: FormBuilder) { }
  persos!: Personnage[];

  submitted = false;


  ngOnInit(): void {
    this.submitted=false;
  }
  /* trouver comment obtenir les valeurs des champs
  persoForm = this.formbuilder.group({
      mail: ['',Validators.required],
      nom: ['',Validators.required],
      genre: ['',Validators.required],
      password: ['',Validators.required]
  });
  */

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
