import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {
  //personnage!: Personnage;


  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getPersonnageInfos().subscribe((perso) => {
      if(this.api.isPersonnage(perso))
      console.log("coucou");
    })


  }


}
