import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CareerCarrousel } from '../../components/career-carousel/career-carousel';
import { Maps } from '../../components/maps/maps';

@Component({
  selector: 'app-inicio',
  imports: [Banner, CareerCarrousel, Maps],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
