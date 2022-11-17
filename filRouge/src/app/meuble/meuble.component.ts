import { Component, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.scss']
})
export class MeubleComponent implements OnInit {

  constructor(private recetteService :RecetteService) { }
  meubles :Objet[] = [];
  ngOnInit(): void {
    this.recetteService.getMeubles().subscribe(recettefromService=> this.meubles=recettefromService);
  }

}
