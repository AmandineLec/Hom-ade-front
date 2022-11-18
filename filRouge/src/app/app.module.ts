import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AcountComponent } from './acount/acount.component';
import { MenuComponent } from './menu/menu.component';
import { RecettesComponent } from './recettes/recettes.component';
import { MenuJeuComponent } from './menu-jeu/menu-jeu.component';
import { OutilsComponent } from './outils/outils.component';
import { MeubleComponent } from './meuble/meuble.component';
import { DecoComponent } from './deco/deco.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ModalModule } from './_modal';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './service/api.service';
import { InventaireComponent } from './inventaire/inventaire.component';
import { SingleRecetteComponent } from './single-recette/single-recette.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
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

