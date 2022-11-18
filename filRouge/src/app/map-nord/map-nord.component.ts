import { Component, OnInit } from '@angular/core';
import { ObjetRecoltable } from '../interface/objet-recoltable';
import { ObjetRecoltableService } from '../service/objet-recoltable.service';

@Component({
  selector: 'app-map-nord',
  templateUrl: './map-nord.component.html',
  styleUrls: ['./map-nord.component.scss'],
  host : {'class' : 'map'}
})
export class MapNordComponent implements OnInit {
  objetsRecoltables: ObjetRecoltable[] = [];

  constructor(private objRecSer: ObjetRecoltableService) { }
    
  ngOnInit(): void {
    this.objRecSer.getObjetsRecoltables().subscribe((objetsRecoltables) => {
      this.objetsRecoltables = objetsRecoltables;
    });
  }

  recolte(index: number) {
    this.objRecSer.recolte(index).subscribe((objetRecoltable) => {
      this.objetsRecoltables[index] = objetRecoltable;
    });
  }
}
