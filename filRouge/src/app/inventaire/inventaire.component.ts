import { Component, OnInit } from '@angular/core';
import { InventaireObjet } from '../interface/inventaire-objet';
import { InventaireRessource } from '../interface/inventaire-ressource';
import { InventaireService } from '../service/inventaire.service';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss'],
  host : {'class' : 'modalInventaire'}
})
export class InventaireComponent implements OnInit {

  constructor(private inventaireService :InventaireService) { }
  inventaireRessource :InventaireRessource[]= [];
  inventaireObjet :InventaireObjet[] = [];
  inventaire : number = 1; 
  equipable :Boolean = false; 
  ngOnInit(): void {
    this.inventaireService.getInventaireRessource().subscribe(inventaireFromService =>
      this.inventaireRessource = inventaireFromService);
    this.inventaireService.getInventaireObjet().subscribe(inventaireFromService => 
      this.inventaireObjet = inventaireFromService);  
  }

  EquiperOutil(id :number){
    this.inventaireService.getOutilEquiper(id).subscribe(outilFromService =>
      this.equipable = outilFromService);
  }
}
