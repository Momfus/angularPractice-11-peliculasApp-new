import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [HomeComponent, BuscarComponent, PeliculasComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
