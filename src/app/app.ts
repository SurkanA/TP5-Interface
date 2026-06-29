import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './general/app-footer/app-footer';
import { HeaderGeneral } from './header-general/header-general';
import { Banner } from './banner/banner';
import { Maps } from './maps/maps';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderGeneral, FooterComponent, Banner, Maps],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tp5-interface');
}
