import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';
import { ModalService } from '../_modal';
@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.scss']
})
export class OutilsComponent implements OnInit {

  constructor(private recetteService :RecetteService, private modalService :ModalService) {}
  outils :Objet[] = []; 
  ngOnInit(): void {
    this.recetteService.getOutils().subscribe(recetteFromService => 
      this.outils = recetteFromService);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

closeModal(id: string) {
  this.modalService.close(id);
}
}
