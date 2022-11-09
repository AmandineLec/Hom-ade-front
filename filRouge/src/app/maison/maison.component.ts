import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss'],
  host : {'class' : 'map'}
})
export class MaisonComponent implements OnInit {
  cadre: string = "../../assets/img/Divers/ObjetAPlacer.png";
  table: string = "../../assets/img/Divers/ObjetAPlacer.png";
  etagere: string = "../../assets/img/Divers/ObjetAPlacer.png"
  chaise: string = "../../assets/img/Divers/ObjetAPlacer.png"
  constructor() { }

  ngOnInit(): void {
  }

  installeCadre(){
    this.cadre = "../../assets/img/Décoration/Cadre01.png";
    document.getElementById('cadre')!.style.gridRow = "4 / span 2";
  }

  installeEtagere(){
    // this.etagere = "../../assets/img/Meuble/Etagere/Etagere01.png";
    // document.getElementById('etagere')!.style.gridRow = "9 / span 2";
    // document.getElementById('imgEtagere')!.style.width = "150%";
    // document.getElementById('imgEtagere')!.style.rotate = "0 0 0 0deg";

  }

  deco(){
  this.table = "../../assets/img/Meuble/Table/Table01.png";
  document.getElementById('table')!.style.gridColumn = "6 / span 2";
  document.getElementById('table')!.style.gridRow = "8 / span 2";
  }

  fond(){
    let fond = document.getElementById('fond')!;
    fond.style.backgroundColor = "transparent";
    fond.style.backgroundImage = "url('../../assets/img/Décoration/Carrelage01.png')";
  }



  gauche(){
    let gauche = document.getElementById('chaise')!;
    gauche.style.borderColor = "transparent";
    gauche.style.borderLeft = "1px solid #EEAB00";
    gauche.style.backgroundImage = "url('../../assets/img/Décoration/Carrelage01.png')";
  }

  bas(){
    let bas = document.getElementById('bas')!;
    bas.style.borderColor = "transparent";
    bas.style.borderTop = "1px solid #EEAB00";
    bas.style.backgroundImage = "url('../../assets/img/Décoration/parquet.jpg')";
  }
}
