import { Component, Input, OnInit } from '@angular/core';
import { Objet } from '../interface/objet';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-single-recette',
  templateUrl: './single-recette.component.html',
  styleUrls: ['./single-recette.component.scss'],
  host : {'class' : 'modalSingleRecette', 'id' : 'modalSingleRecette'},
})
export class SingleRecetteComponent implements OnInit {
  @Input() objet! :Objet; 
  created :Boolean = true; 
  constructor(private recetteService :RecetteService) { }
  ngOnInit(): void {
      this.recetteService.getRecette(this.objet.id).subscribe(objetFromService=>
        this.objet = objetFromService);
  }

  CreerObjet(id : number) {
    this.recetteService.getObjet(id).subscribe(objetFromService => 
      this.created = objetFromService)
  }
}
