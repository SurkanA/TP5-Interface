import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CareerCarrousel } from '../../components/career-carousel/career-carousel';
import { Maps } from '../../components/maps/maps';
import { LatestNews } from '../../components/latest-news/latest-news';

@Component({
  selector: 'app-inicio',
  imports: [Banner, CareerCarrousel, LatestNews, Maps],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
