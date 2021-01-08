import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'; // Tap ejecuta un código cada vez que hay el observable emite un cambio
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // tslint:disable: no-inferrable-types
  private baseUrl: string = 'https://api.themoviedb.org/3'; // En caso de cambiar en develop y production, se define en el environment
  private carteleraPage: number = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient) { }

  get params(): any {
    return {
      api_key: '4a80e067246de68085ecf7925f25dd6f',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    };
  }

  resetCarteleraPage(): void {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {

    if ( this.cargando ) {
      // Cargando películas
      return of([]); // Simula devolver un observable
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params // Añadiendo parametros en la petición
    }).pipe(
      map( (res) => {  // Transformar lo de CqrteleraResponse a solo Movie (que es lo necesario)
        return res.results;
      }),
      tap( () => {
        this.carteleraPage += 1; // aumentar la página cada vez que se realiza un cambio en el llamado
        this.cargando = false;
      })
    );

  }

  buscarPeliculas( texto: string ): Observable<Movie[]> {

    // Se arma un objeto igual que params pero con página 1 y query de texto de buscar
    const params = {...this.params, page: 1, query: texto};

    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`,{
      params // igual que params: params
    }).pipe(
      map(
        res => res.results
      )
    );

  }

}
