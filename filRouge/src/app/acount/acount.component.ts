import { Component, OnInit } from '@angular/core';
import {Personnage} from "../personnage";
import{ApiService} from "../api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {
  user!: Personnage;
  persos: Personnage[] = [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getPersonnageInfos().subscribe((personnage) => {
      if(this.api.isPersonnage(personnage))
      console.log("coucou");
    })
    /*https://www.angularjswiki.com/httpclient/post/
    this.api.getPersonnageInfos().subscribe((response: any) => {
      console.log(response);
    })
     */


  }


}
