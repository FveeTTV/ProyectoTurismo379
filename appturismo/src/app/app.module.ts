import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DestinosComponent } from './pagina/destinos/destinos.component';
import { AcercaDeComponent } from './pagina/acerca-de/acerca-de.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanerComponent,
    FooterComponent,
    NavComponent,
    DestinosComponent,
    AcercaDeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
