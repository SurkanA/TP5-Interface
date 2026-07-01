import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';
  showPassword = signal(false);
  error = signal('');
  loading = signal(false);

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
      const ok = this.auth.login(this.username, this.password);
      if (ok) {
        this.router.navigate(['/admin/noticias']);
      } else {
        this.error.set('Usuario o contraseña incorrectos.');
        this.loading.set(false);
      }
    }, 600);
  }
}
