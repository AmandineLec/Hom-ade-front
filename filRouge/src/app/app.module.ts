import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AcountComponent } from './acount/acount.component';
import { MenuComponent } from './menu/menu.component';
import { RecettesComponent } from './recettes/recettes.component';
import { MenuJeuComponent } from './menu-jeu/menu-jeu.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ModalModule } from './_modal';
import { InventaireComponent } from './inventaire/inventaire.component';
import { SingleRecetteComponent } from './single-recette/single-recette.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AcountComponent,
    MenuComponent,
    MenuJeuComponent,
    ParametresComponent, 
    RecettesComponent,
    InventaireComponent,
    SingleRecetteComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientModule,
      ModalModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

