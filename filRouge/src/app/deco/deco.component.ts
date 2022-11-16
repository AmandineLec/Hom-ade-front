import { Component, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.scss']
})
export class DecoComponent implements OnInit {

  constructor(private recetteService :RecetteService) { }
  decos :Objet[] = [];
  ngOnInit(): void {
    this.recetteService.getDecos().subscribe(recetteFromService => 
      this.decos = recetteFromService);
  }

}
