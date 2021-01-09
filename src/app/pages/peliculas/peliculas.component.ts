import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public pelicula: MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log(movie);
      this.pelicula = movie;
    });

  }

  onRegresar(): void {
    this.location.back();
  }

}
