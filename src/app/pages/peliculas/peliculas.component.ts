import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log(movie);
    });

  }

}
