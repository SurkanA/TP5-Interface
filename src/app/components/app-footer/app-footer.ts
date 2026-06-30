import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-footer.html',
  styleUrls: ['./app-footer.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
