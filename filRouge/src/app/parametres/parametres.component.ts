import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
  host : {'id': 'params'}
})
export class ParametresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
