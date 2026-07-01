import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Careers } from '../../services/Careers';
import { Career } from '../../models/career';

@Component({
  selector: 'app-careers-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career-carousel.html',
  styleUrls: ['./career-carousel.css'],
})
export class CareerCarrousel {
  private careersService = inject(Careers);

  currentIndex = 0;
  careers: Career[] = this.careersService.getAll();

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
