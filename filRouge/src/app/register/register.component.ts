import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private api : ApiService) { }
  persos!: Personnage[];

  submitted = false;


  ngOnInit(): void {
    this.submitted=false;
    /*this.api.getPersonnages().subscribe(data =>{
      this.persos = data;
    })*/
  }
  personnage : FormGroup = new FormGroup({
    mail:new FormControl('',[Validators.required,Validators.email]),
    pseudo:new FormControl('' , [Validators.required]),
    genre:new FormControl('' , [Validators.required]),
    password:new FormControl('',[Validators.required])
  });


  onSubmit() {
    this.api.register(this.personnage.value).subscribe((perso) => {
      if(this.api.isPersonnage(perso))
      this.submitted = true;
    })
  }

}
