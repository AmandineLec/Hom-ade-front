import { Component, OnInit } from '@angular/core';
import { ObjetRecoltableService } from '../service/objet-recoltable.service';
import { ObjetRecoltable } from '../interface/objet-recoltable';
@Component({
  selector: 'app-map-sud',
  templateUrl: './map-sud.component.html',
  styleUrls: ['./map-sud.component.scss'],
  host : {'class' : 'map'}
})
export class MapSudComponent implements OnInit {
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
