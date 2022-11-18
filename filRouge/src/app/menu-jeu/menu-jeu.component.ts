import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { InventaireComponent } from '../inventaire/inventaire.component';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-menu-jeu',
  templateUrl: './menu-jeu.component.html',
  styleUrls: ['./menu-jeu.component.scss'],
  host : {'class' : 'menujeu', 'id' : 'menuJeu'}
})
export class MenuJeuComponent implements OnInit {
  @ViewChild(InventaireComponent) inventairechild! : InventaireComponent

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    // Subscribe => au changement de valeur openModal()
  }


  openModal(id: string) {
      this.modalService.open(id);
    }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
