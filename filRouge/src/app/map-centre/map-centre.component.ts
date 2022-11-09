import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-centre',
  templateUrl: './map-centre.component.html',
  styleUrls: ['./map-centre.component.scss'],
  host : {'class' : 'map'}
})
export class MapCentreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
