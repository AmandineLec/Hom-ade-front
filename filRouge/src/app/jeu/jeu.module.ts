import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametresComponent } from '../parametres/parametres.component';
import { RecettesComponent } from '../recettes/recettes.component';
import { CarteComponent } from '../carte/carte.component';
import { InventaireComponent } from '../inventaire/inventaire.component';
import { MapCentreComponent } from '../map-centre/map-centre.component';
import { MapNordComponent } from '../map-nord/map-nord.component';
import { MapNordEstComponent } from '../map-nord-est/map-nord-est.component';
import { MapEstComponent } from '../map-est/map-est.component';
import { MapSudEstComponent } from '../map-sud-est/map-sud-est.component';
import { MapSudComponent } from '../map-sud/map-sud.component';
import { MapSudOuestComponent } from '../map-sud-ouest/map-sud-ouest.component';
import { MapOuestComponent } from '../map-ouest/map-ouest.component';
import { MapNordOuestComponent } from '../map-nord-ouest/map-nord-ouest.component';
import { JeuRoutingModule } from './jeu-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ParametresComponent,
    RecettesComponent,
    CarteComponent,
    InventaireComponent,
    MapCentreComponent,
    MapNordComponent,
    MapNordEstComponent,
    MapEstComponent,
    MapSudEstComponent,
    MapSudComponent,
    MapSudOuestComponent,
    MapOuestComponent,
    MapNordOuestComponent
  ],
  imports: [
    CommonModule,
    JeuRoutingModule, 
    HttpClientModule
  ]
})
export class JeuModule { }
