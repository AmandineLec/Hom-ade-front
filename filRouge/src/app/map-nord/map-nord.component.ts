import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-nord',
  templateUrl: './map-nord.component.html',
  styleUrls: ['./map-nord.component.scss'],
  host : {'class' : 'map'}
})
export class MapNordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
