import { Component, signal } from '@angular/core';
import { HeaderGeneral } from './header-general/header-general';

@Component({
  selector: 'app-root',
  imports: [HeaderGeneral],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tp5-interface');
}
