import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-est',
  templateUrl: './map-est.component.html',
  styleUrls: ['./map-est.component.scss'],
  host : {'class' : 'map'}
})
export class MapEstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
