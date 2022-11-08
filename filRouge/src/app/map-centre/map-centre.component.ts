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
    this.objRecSer.getObjetRecoltable(0).subscribe((objetRecoltable) => {
      this.objetsRecoltables.push(objetRecoltable);
    })
  }

  recolte(index: number) {
    
    this.objRecSer.recolte(index);
  }
}
