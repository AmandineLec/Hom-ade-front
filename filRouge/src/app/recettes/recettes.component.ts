import { Component, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss'],
  host : {'class' : 'modalRecette'}
})
export class RecettesComponent implements OnInit {
  
  constructor() { }
  modalRecette__button :number = 1; 
  ngOnInit(): void {
  }
}
