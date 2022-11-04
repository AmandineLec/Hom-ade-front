import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuJeuComponent } from '../menu-jeu/menu-jeu.component';
import { MapCentreComponent } from '../map-centre/map-centre.component';
import { MapNordComponent } from '../map-nord/map-nord.component';
import { MapNordEstComponent } from '../map-nord-est/map-nord-est.component';
import { MapEstComponent } from '../map-est/map-est.component';
import { MapSudEstComponent } from '../map-sud-est/map-sud-est.component';
import { MapSudComponent } from '../map-sud/map-sud.component';
import { MapSudOuestComponent } from '../map-sud-ouest/map-sud-ouest.component';
import { MapOuestComponent } from '../map-ouest/map-ouest.component';
import { MapNordOuestComponent } from '../map-nord-ouest/map-nord-ouest.component';

const routes: Routes = [
  {path: 'c', component: MapCentreComponent},
  {path: 'n', component: MapNordComponent},
  {path: 'ne', component: MapNordEstComponent},
  {path: 'e', component: MapEstComponent},
  {path: 'se', component: MapSudEstComponent},
  {path: 's', component: MapSudComponent},
  {path: 'so', component: MapSudOuestComponent},
  {path: 'o', component: MapOuestComponent},
  {path: 'no', component: MapNordOuestComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeuRoutingModule { }
