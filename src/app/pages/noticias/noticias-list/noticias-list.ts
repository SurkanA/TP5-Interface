import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../services/NewsService';
import { News } from '../../../models/news';

@Component({
  selector: 'app-noticias-list',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule],
  templateUrl: './noticias-list.html',
  styleUrl: './noticias-list.css',
})
export class NoticiasList {
  private newsService = inject(NewsService);

  searchQuery = signal<string>('');
  searchOpen = signal<boolean>(false);

  allNews = signal<News[]>(this.newsService.getAllSortedByDate());

  filteredNews = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.allNews();
    }
    return this.allNews().filter((item) =>
      item.title.toLowerCase().includes(query)
    );
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

  getTextSummary(html: string): string {
    if (!html) return '';
    // Strip HTML tags
    const plainText = html.replace(/<[^>]*>/g, ' ');
    // Replace multiple spaces with a single space and trim
    return plainText.replace(/\s+/g, ' ').trim();
  }
}
