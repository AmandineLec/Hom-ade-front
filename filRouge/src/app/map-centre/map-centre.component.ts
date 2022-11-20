import { Component, OnInit } from '@angular/core';
import { ObjetRecoltableService } from '../service/objet-recoltable.service';
import { ObjetRecoltable } from '../interface/objet-recoltable';

@Component({
  selector: 'app-map-centre',
  templateUrl: './map-centre.component.html',
  styleUrls: ['./map-centre.component.scss'],
  host : {'class' : 'map'}
})
export class MapCentreComponent implements OnInit {
  objetsRecoltables: ObjetRecoltable[] = [];

  constructor(private objRecSer: ObjetRecoltableService) { }
    
  ngOnInit(): void {
    this.objRecSer.getObjetsRecoltables().subscribe((objetsRecoltables) => {
      this.objetsRecoltables = objetsRecoltables;
    });
  }

  recolte(index: number) {
    this.objRecSer.recolte(index).subscribe((objetRecoltable) => {
      if (objetRecoltable.idObjetRecoltable == 0)
        alert("Vous n'avez pas le bon outil");
      else
        this.objetsRecoltables[index] = objetRecoltable;
    });
  }
}
