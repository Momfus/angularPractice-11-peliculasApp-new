import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private peliculasService: PeliculasService) {

    this.peliculasService.getCartelera()
      .subscribe( res => { // No se recomienda a poner el tipado aca, sino que venga ya desde el servicio
        console.log(res);
      });

  }

}
