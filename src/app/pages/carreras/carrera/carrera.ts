import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Careers } from '../../../services/Careers';
import { Career } from '../../../models/career';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css',
})
export class Carrera {
  private route = inject(ActivatedRoute);
  private careersService = inject(Careers);

  career = signal<Career | undefined>(undefined);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ?? '';
      this.career.set(this.careersService.getById(id));
    });
  }
}
