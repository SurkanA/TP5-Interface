import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NewsService } from '../../../services/NewsService';
import { News } from '../../../models/news';

@Component({
  selector: 'app-noticias-detalle',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './noticias-detalle.html',
  styleUrl: './noticias-detalle.css',
})
export class NoticiasDetalle {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  noticia = signal<News | undefined>(undefined);
  prevNoticia = signal<News | undefined>(undefined);
  nextNoticia = signal<News | undefined>(undefined);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ?? '';
      const current = this.newsService.getById(id);
      this.noticia.set(current);

      if (current) {
        const list = this.newsService.getAllSortedByDate();
        const index = list.findIndex((n) => n.id === current.id);
        this.prevNoticia.set(index > 0 ? list[index - 1] : undefined);
        this.nextNoticia.set(index < list.length - 1 ? list[index + 1] : undefined);
      } else {
        this.prevNoticia.set(undefined);
        this.nextNoticia.set(undefined);
      }
    });
  }
}
