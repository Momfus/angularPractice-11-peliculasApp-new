import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

// Definición de rutas
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculasComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ) // Exportar las rutas utilizadas
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
