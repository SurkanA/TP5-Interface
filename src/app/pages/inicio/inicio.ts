import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CareerCarrousel } from '../../components/career-carousel/career-carousel';

@Component({
  selector: 'app-inicio',
  imports: [Banner, CareerCarrousel],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
