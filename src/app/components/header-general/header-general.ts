import { Component, input, output, signal, inject } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header-general',
  imports: [],
  standalone: true,
  templateUrl: './header-general.html',
  styleUrl: './header-general.css',
})
export class HeaderGeneral {
  currentView = input.required<string>();
  navigate = output<string>();
  menuOpen = signal(false);

  auth = inject(Auth);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  onNavigate(view: string) {
    this.navigate.emit(view);
    this.menuOpen.set(false);
  }

  onLogout() {
    this.auth.logout();
    this.onNavigate('inicio');
  }
}
