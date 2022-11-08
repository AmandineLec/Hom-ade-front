import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss']
})
export class MaisonComponent implements OnInit {
  cadre: string = "../../assets/img/Divers/ObjetAPlacer.png";
  cadre2: string = "../../assets/img/Divers/ObjetAPlacer.png";
  sol: string = "../../assets/img/Divers/ObjetAPlacer.png";
  constructor() { }

  ngOnInit(): void {
  }

  display(e:Event){
    this.cadre = "../../assets/img/Décoration/Cadre01.png";
    document.getElementById('cadre')!.style.gridRow = "3 / span 2";
  }
  display2(e:Event){
    this.cadre2 = "../../assets/img/Décoration/Cadre01.png";
    document.getElementById('cadre')!.style.gridRow = "3 / span 2";
  }
  deco(e:Event){
    document.getElementById('container')!.style.backgroundImage = "url('../../assets/img/Background/MaisonCarrelage.png'), url('../../assets/img/Background/MaisonSolVide.png'), url('../../assets/img/Background/MaisonPeintureBleue.png')";    
  }


}
