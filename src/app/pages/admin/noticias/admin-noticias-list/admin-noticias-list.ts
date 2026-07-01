import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../../services/NewsService';
import { News } from '../../../../models/news';

@Component({
  selector: 'app-admin-noticias-list',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule],
  templateUrl: './admin-noticias-list.html',
  styleUrl: './admin-noticias-list.css',
})
export class AdminNoticiasList {
  private newsService = inject(NewsService);

  searchQuery = signal<string>('');
  searchOpen = signal<boolean>(false);
  refreshSignal = signal<number>(0);

  allNews = computed(() => {
    this.refreshSignal();
    return this.newsService.getAllSortedByDate();
  });

  filteredNews = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.allNews();
    }
    return this.allNews().filter((item) => item.title.toLowerCase().includes(query));
  });

  toggleSearch() {
    this.searchOpen.set(!this.searchOpen());
  }

  onSearch(query: string) {
    this.searchQuery.set(query);
  }

  clearSearch() {
    this.searchQuery.set('');
  }

  onDelete(id: string) {
    if (confirm('¿Está seguro de que desea eliminar esta noticia?')) {
      this.newsService.delete(id);
      this.refreshSignal.update((v) => v + 1);
    }
  }
}
