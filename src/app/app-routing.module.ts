import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component'; 
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: 'bienvenido', component:BienvenidoComponent },
  { path: 'busqueda', component:BusquedaComponent },
  { path: 'peliculas/alta', component:PeliculaAltaComponent },
  { path: 'actor/alta', component:ActorAltaComponent },
  { path: 'actor/listado', component:ActorListadoComponent },
  { path: 'peliculas/listado', component:PeliculaListadoComponent },
  { path: 'actor/actorpelicula', component:ActorPeliculaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
