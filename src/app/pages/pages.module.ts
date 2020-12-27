import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PeliculasComponent } from './peliculas/peliculas.component';



@NgModule({
  declarations: [HomeComponent, BuscarComponent, PeliculasComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
