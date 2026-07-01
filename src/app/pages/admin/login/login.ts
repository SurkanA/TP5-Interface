import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  showPassword = signal(false);
  error = signal('');
  loading = signal(false);

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword.update((v) => !v);
  }

  onSubmit() {
    this.error.set('');

    if (!this.username || !this.password) {
      this.error.set('Complete todos los campos.');
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['/']);
      } else {
        this.error.set('Usuario o contraseña incorrectos.');
        this.loading.set(false);
      }
    }, 600);
  }
}
