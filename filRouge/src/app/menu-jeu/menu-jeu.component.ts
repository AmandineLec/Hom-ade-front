import { Component, OnInit, ViewChild } from '@angular/core';
import { InventaireComponent } from '../inventaire/inventaire.component';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-menu-jeu',
  templateUrl: './menu-jeu.component.html',
  styleUrls: ['./menu-jeu.component.scss'],
  host : {'class' : 'menujeu', 'id' : 'menuJeu'}
})
export class MenuJeuComponent implements OnInit {

  @ViewChild(InventaireComponent) inventaireComponent!: InventaireComponent

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  openModal(id: string) {
      this.modalService.open(id);
      this.inventaireComponent.ngOnInit();
    }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
