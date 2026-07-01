import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CareerCarrousel } from '../../components/career-carousel/career-carousel';
import { LatestNews } from '../../components/latest-news/latest-news';

@Component({
  selector: 'app-inicio',
  imports: [Banner, CareerCarrousel, LatestNews],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
