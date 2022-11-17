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
    this.objetsRecoltables = [{"idObjetRecoltable":10,"nom":"Bois de séquoïa","pv":10,"pvMax":10,"cooldown":60000,"disparitionTime":0},{"idObjetRecoltable":26,"nom":"Sardine","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":51,"nom":"Silex","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":46,"nom":"Mare","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":42,"nom":"Coton","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":52,"nom":"Coquille Saint Jacques","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":6,"nom":"Tige de roseau","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":47,"nom":"Pluie","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":43,"nom":"Lin","pv":6,"pvMax":6,"cooldown":40000,"disparitionTime":0},{"idObjetRecoltable":53,"nom":"Eau","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":38,"nom":"Marbre","pv":6,"pvMax":6,"cooldown":40000,"disparitionTime":0},{"idObjetRecoltable":50,"nom":"Sève","pv":10,"pvMax":10,"cooldown":60000,"disparitionTime":0},{"idObjetRecoltable":54,"nom":"Bois Mort","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":39,"nom":"Schiste","pv":8,"pvMax":8,"cooldown":50000,"disparitionTime":0},{"idObjetRecoltable":8,"nom":"Bois de chêne","pv":6,"pvMax":6,"cooldown":40000,"disparitionTime":0},{"idObjetRecoltable":40,"nom":"Diamant","pv":10,"pvMax":10,"cooldown":60000,"disparitionTime":0},{"idObjetRecoltable":53,"nom":"Eau","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":41,"nom":"Champignon","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":9,"nom":"Bois d'ébène","pv":8,"pvMax":8,"cooldown":50000,"disparitionTime":0},{"idObjetRecoltable":7,"nom":"Tige de bambou","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":55,"nom":"Paquerettes","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":36,"nom":"Brique","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":27,"nom":"Carpe","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":49,"nom":"Source","pv":8,"pvMax":8,"cooldown":50000,"disparitionTime":0},{"idObjetRecoltable":51,"nom":"Silex","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":48,"nom":"Rivière","pv":6,"pvMax":6,"cooldown":40000,"disparitionTime":0},{"idObjetRecoltable":28,"nom":"Truite","pv":6,"pvMax":6,"cooldown":40000,"disparitionTime":0},{"idObjetRecoltable":32,"nom":"Cuivre","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":56,"nom":"Plomb","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":31,"nom":"Fer","pv":2,"pvMax":2,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":37,"nom":"Granit","pv":4,"pvMax":4,"cooldown":30000,"disparitionTime":0},{"idObjetRecoltable":44,"nom":"Chanvre","pv":8,"pvMax":8,"cooldown":50000,"disparitionTime":0},{"idObjetRecoltable":52,"nom":"Coquille Saint Jacques","pv":1,"pvMax":1,"cooldown":20000,"disparitionTime":0},{"idObjetRecoltable":45,"nom":"Jute","pv":10,"pvMax":10,"cooldown":60000,"disparitionTime":0},{"idObjetRecoltable":29,"nom":"Brochet","pv":8,"pvMax":8,"cooldown":50000,"disparitionTime":0}];
    // this.objRecSer.getObjetsRecoltables().subscribe((objetsRecoltables) => {
    //   this.objetsRecoltables = objetsRecoltables;
    // });
  }

  recolte(index: number) {
    this.objRecSer.recolte(index).subscribe((objetRecoltable) => {
      this.objetsRecoltables[index] = objetRecoltable;
    });
  }
}
