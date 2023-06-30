import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DestinosComponent } from './destinos/destinos.component';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({
  declarations: [
    AcercaDeComponent,
    DestinosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcercaDeComponent,
    DestinosComponent,
    ContactoComponent
  ]
})

export class PaginaModule { }
