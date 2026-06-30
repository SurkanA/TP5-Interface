import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderGeneral } from '../../components/header-general/header-general';
import { FooterComponent } from '../../components/app-footer/app-footer';
import { filter } from 'rxjs';


@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderGeneral, FooterComponent],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {
  currentView = signal('inicio');

  constructor(protected router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.url.split('/')[1] || 'inicio';
        this.currentView.set(path);
      });
  }
}
