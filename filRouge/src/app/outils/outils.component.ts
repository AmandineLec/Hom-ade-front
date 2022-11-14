import { Component, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';
@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.scss']
})
export class OutilsComponent implements OnInit {

  constructor(private recetteService :RecetteService) {}
  outils :Objet[] = []; 
  ngOnInit(): void {
    this.recetteService.getOutils().subscribe(recetteFromService => 
      this.outils = recetteFromService);
  }

}
