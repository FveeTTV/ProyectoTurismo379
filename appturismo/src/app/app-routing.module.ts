import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './componentes/baner/baner.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { DestinosComponent } from './pagina/destinos/destinos.component';
import { AcercaDeComponent } from './pagina/acerca-de/acerca-de.component';

const routes: Routes = [
  {path:'baner', component: BanerComponent},
  {path:'Contacto', component: ContactoComponent},
  {path:'Destinos', component:DestinosComponent},
  {path:'Acerca-de',component:AcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
