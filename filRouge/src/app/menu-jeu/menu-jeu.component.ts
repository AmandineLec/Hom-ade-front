import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-jeu',
  templateUrl: './menu-jeu.component.html',
  styleUrls: ['./menu-jeu.component.scss'],
  host : {'class' : 'menujeu', 'id' : 'menuJeu'}
})
export class MenuJeuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
