import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = []; // Todas las peliculas que hay
  public moviesSlideshow: Movie[] = []; // Películas para mostrar

  @HostListener('window:scroll', ['$event']) // Esta atento aun evento (en este caso cuando se haga scroll e interesa la propiedad evento)
  onScroll(): void { // Función realizada con el HostListener (de más arriba)

    // Se realiza el cálculo donde debe realizarse el lazyload
    // Coloca la posición de la parte superior del scrollo, de estar undefined la del body
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight ); // Si ambos son iguales, es que se llegó al final

    if ( pos > max ) {

      if ( this.peliculasService.cargando ) { return; } // Si esta cargando aún, no llama al servicio

      this.peliculasService.getCartelera().subscribe(
        (movies) => {
          this.movies.push(...movies); // Agrega al final el nuevo resultado
        }
      );
    }

  }

  constructor( private peliculasService: PeliculasService ) {

    this.peliculasService.getCartelera()
      .subscribe( movies => { // No se recomienda a poner el tipado aca, sino que venga ya desde el servicio
        // console.log(res);
        this.movies = movies;
        this.moviesSlideshow = movies;
      });

  }

  ngOnInit(): void {
  }

}
