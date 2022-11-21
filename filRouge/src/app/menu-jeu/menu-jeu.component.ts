import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-menu-jeu',
  templateUrl: './menu-jeu.component.html',
  styleUrls: ['./menu-jeu.component.scss'],
  host : {'class' : 'menujeu', 'id' : 'menuJeu'}
})
export class MenuJeuComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  openModal(id: string) {
      this.modalService.open(id);
    }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
