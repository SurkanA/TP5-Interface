import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/NewsService';
import { News } from '../../models/news';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-news.html',
  styleUrl: './latest-news.css',
})
export class LatestNews {
  private newsService = inject(NewsService);

  latestNews: News[] = this.newsService.getAllSortedByDate().slice(0, 5);
}
