import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { InventaireObjet } from '../interface/inventaire-objet';
import { Objet } from '../interface/objet';
import { InventaireService } from '../service/inventaire.service';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss'],
  host : {'class' : 'map'}
})
export class MaisonComponent implements OnInit {
  @Input() inventaire!: InventaireObjet[];

  cadre: string = "../../assets/img/Divers/aplacer.png";
  table: string = "../../assets/img/Divers/aplacer.png";
  etagere: string = "../../assets/img/Divers/aplacer.png";
  chaise: string = "../../assets/img/Divers/aplacer.png";
  toilettes: string = "../../assets/img/Divers/aplacer.png";

  // private evenement = new Subject<string>();
  // evenement$ = this.evenement.asObservable();
  // Mettre ca dans un service

  constructor(private inventaireService :InventaireService) { }
  
  ngOnInit(): void {
      this.inventaireService.getInventaireObjet().subscribe(inventaireFromService=>
        this.inventaire = inventaireFromService);
  }


  installeCadre(){
    this.cadre = "../../assets/img/Objets/Cadre01.png";
    document.getElementById('cadre')!.style.gridRow = "4 / span 2";
    document.getElementById('imgCadre')!.style.filter = "opacity(1)";
  }

  installeEtagere(){
    // this.evenementservice.valeur.next("inventaire");
    this.etagere = "../../assets/img/Objets/Etagere01.png";
    document.getElementById('etagere')!.style.gridRow = "7 / span 2";
    document.getElementById('etagere')!.style.gridColumn = "3 / span 2";
    document.getElementById('etagere')!.style.width = "130px";
    document.getElementById('imgEtagere')!.style.rotate = "0 0 0 0deg";
    document.getElementById('imgEtagere')!.style.filter = "opacity(1)";
  }

  installeChaise(){
    this.chaise = "../../assets/img/Objets/Chaise03.png";
    document.getElementById('chaise')!.style.gridColumn = "7 / span 1";
    document.getElementById('chaise')!.style.gridRow = "9 / span 2";
    document.getElementById('imgChaise')!.style.filter = "opacity(1)";
  }

  installeTable(){
  this.table = "../../assets/img/Objets/Table02.png";
  document.getElementById('table')!.style.gridColumn = "6 / span 2";
  document.getElementById('table')!.style.gridRow = "9 / span 2";
  document.getElementById('imgTable')!.style.filter = "opacity(1)";
  }

  installeToilettes(){
    this.toilettes = "../../assets/img/Objets/Toilette02.png";
    document.getElementById('toilettes')!.style.gridColumn = "6 / span 2";
    document.getElementById('toilettes')!.style.gridRow = "5 / span 3";
    document.getElementById('toilettes')!.style.alignSelf = "center";
    document.getElementById('imgToilettes')!.style.filter = "opacity(1)";
  }

  fond(){
    let fond = document.getElementById('fond')!;
    fond.style.backgroundColor = "transparent";
    fond.style.backgroundImage = "url('../../assets/img/Objets/Carrelage01.png')";
  }

  bas(){
    let bas = document.getElementById('bas')!;
    bas.style.borderColor = "transparent";
    bas.style.borderTop = "1px solid #EEAB00";
    bas.style.backgroundImage = "url('../../assets/img/Objets/parquet.jpg')";
  }
}
