import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Joueur } from '../interface/joueur';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss'],
  host : {'class' : 'modalRecette'}
})
export class RecettesComponent implements OnInit {
  outils :Objet[] = []; 
  meubles :Objet[] = []; 
  decos :Objet[] = []; 
  objets :Objet[] = []; 
  joueur! :Joueur; 
  
  constructor(private recetteService :RecetteService, private modalService :ModalService) { }
  modalRecette__button :number = 1; 
  ngOnInit(): void {
    this.recetteService.getOutils().subscribe(recetteFromService => 
      this.outils = recetteFromService);
    this.recetteService.getMeubles().subscribe(recetteFromService=>
      this.meubles = recetteFromService);
    this.recetteService.getDecos().subscribe(recetteFromService =>
      this.decos = recetteFromService);
    this.recetteService.getRecettes().subscribe(recetteFromService =>
      this.objets = recetteFromService);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
