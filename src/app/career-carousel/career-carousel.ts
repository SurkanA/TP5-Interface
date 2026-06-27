import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Career {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

@Component({
  selector: 'app-careers-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career-carousel.html',
  styleUrls: ['./career-carousel.css'],
})
export class CareerCarrousel {
  currentIndex = 0;

  careers: Career[] = [
    {
      id: 1,
      title: 'Profesorado de Educación Primaria',
      description:
        'Formación docente para acompañar el aprendizaje de niños y niñas en los primeros años de la escolaridad primaria.',
      imageUrl: '/images/careers/primaria.png',
      route: '/carreras/profesorado-educacion-primaria',
    },
    {
      id: 2,
      title: 'Profesorado de Educación Física',
      description:
        'Formación docente en actividad física, deporte y promoción de hábitos saludables en el ámbito educativo.',
      imageUrl: '/images/careers/educacion-fisica.jpg',
      route: '/carreras/profesorado-educacion-fisica',
    },
    {
      id: 3,
      title: 'Tecnicatura Superior en Enfermería',
      description:
        'Formación técnica en cuidado y atención de la salud, con práctica clínica desde los primeros años de la carrera.',
      imageUrl: '/images/careers/enfermeria.jpg',
      route: '/carreras/tecnicatura-enfermeria',
    },
    {
      id: 4,
      title: 'Tecnicatura Superior en Administración de Pymes',
      description:
        'Formación técnica en gestión, finanzas y administración orientada a pequeñas y medianas empresas.',
      imageUrl: '/images/careers/pymes.jpg',
      route: '/carreras/tecnicatura-administracion-pymes',
    },
  ];

  get totalItems(): number {
    return this.careers.length;
  }

  get currentCareer(): Career {
    return this.careers[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
