import { Component, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { Recette } from '../interface/recette';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {
  objets :Objet[] = [];
  
  constructor(private recetteService :RecetteService) { }

  ngOnInit(): void {
    this.recetteService.getRecette().subscribe(recetteFromService => 
      this.objets = recetteFromService);
  }

}
