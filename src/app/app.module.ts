import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
/*Cette fonction permet de demarer keycloak au demarage*/
export function kcFactory(kycloakService: KeycloakService) {
  /*Return une promesse*/
  return () => {
    kycloakService.init({
      config: {
        realm: "wallet-realm",
        clientId: "gestion-commande",
        url: "http://localhost:8180"
      },
      initOptions: {
        onLoad: "check-sso",
        checkLoginIframe: true
      }
    }
    )
  }
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ForbiddenComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    deps: [KeycloakService],
    useFactory: kcFactory,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
