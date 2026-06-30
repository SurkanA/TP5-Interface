import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-footer.html',
  styleUrls: ['./app-footer.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
