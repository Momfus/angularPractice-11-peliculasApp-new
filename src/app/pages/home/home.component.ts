import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor( private peliculasService: PeliculasService ) {

    this.peliculasService.getCartelera()
      .subscribe( res => { // No se recomienda a poner el tipado aca, sino que venga ya desde el servicio
        // console.log(res);
        this.movies = res.results;
      });

  }

  ngOnInit(): void {
  }

}
