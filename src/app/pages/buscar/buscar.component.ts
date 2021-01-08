import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  // tslint:disable: no-inferrable-types
  public texto: string = '';
  public movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    // Para obtener los parámetros de la ruta
    this.activatedRoute.params.subscribe( param => {

      this.texto = param.texto;

      this.peliculasService.buscarPeliculas(param.texto).subscribe( movies => {

        this.movies = movies;

      });

    });
  }

}
