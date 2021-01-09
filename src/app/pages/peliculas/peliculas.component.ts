import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      // console.log(movie);

      if ( !movie ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = movie;
    });

    this.peliculasService.getCast( id ).subscribe( cast => {
      console.log(cast);
      this.cast = cast;
    });

  }

  onRegresar(): void {
    this.location.back();
  }

}
