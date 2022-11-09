import { Component, OnInit } from '@angular/core';
import { ObjetRecoltableService } from '../service/objet-recoltable.service';
import { ObjetRecoltable } from '../interface/objet-recoltable';

@Component({
  selector: 'app-map-centre',
  templateUrl: './map-centre.component.html',
  styleUrls: ['./map-centre.component.scss']
})
export class MapCentreComponent implements OnInit {
  objetsRecoltables: ObjetRecoltable[] = [];

  constructor(private objRecSer: ObjetRecoltableService) { }
    
  ngOnInit(): void {
    this.objetsRecoltables.push(this.objRecSer.getObjetRecoltable(0));
    this.objetsRecoltables.push(this.objRecSer.getObjetRecoltable(1));
    
  }

  recolte(index: number) {
    const id = this.objetsRecoltables[index].idObjetRecoltable;
    this.objRecSer.recolte(id).subscribe((objetRecoltable) => {
      this.objetsRecoltables[index] = objetRecoltable;
    });
  }
}
