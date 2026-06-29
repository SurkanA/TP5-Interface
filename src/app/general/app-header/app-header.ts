import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-header-general',
  imports: [],
  standalone: true,
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class HeaderComponent {
  currentView = input.required<string>();
  navigate = output<string>();
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  onNavigate(view: string) {
    this.navigate.emit(view);
  }
}
