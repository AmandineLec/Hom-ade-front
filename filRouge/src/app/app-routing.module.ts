import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountComponent } from './acount/acount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AcountComponent},
  {path: 'jeu', loadChildren: () => import('./jeu/jeu.module').then(m => m.JeuModule)},
  {path : 'recette', component : RecettesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
