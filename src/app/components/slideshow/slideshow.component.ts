import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }

  // Necesita primero renderizarse todo en el ngOnInit y luego traer la configuración del swipe para estructurarse correctamente
  ngAfterViewInit(): void {

    const mySwiper = new Swiper('.swiper-container', {

      loop: true, // Par más argumentos opcionales, ver la documentación en https://swiperjs.com
    });
  }

}
