import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
  host : {'id': 'paramsBody'}
})
export class ParametresComponent implements OnInit {
  imgPerso: string = "../../assets/img/Divers/f2.png"
  constructor() { }

  ngOnInit(): void {
  }

}
