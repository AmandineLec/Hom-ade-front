import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AcountComponent } from './acount/acount.component';
import { MenuComponent } from './menu/menu.component';
import { MenuJeuComponent } from './menu-jeu/menu-jeu.component';
import { OutilsComponent } from './outils/outils.component';
import { MeubleComponent } from './meuble/meuble.component';
import { DecoComponent } from './deco/deco.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AcountComponent,
    MenuComponent,
    MenuJeuComponent,
    OutilsComponent,
    MeubleComponent,
    DecoComponent,
    ParametresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
