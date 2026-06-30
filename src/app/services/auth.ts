import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'admin-logged-in';

@Injectable({ providedIn: 'root' })
export class Auth {
  isLoggedIn = signal(this.checkStorage());

  private checkStorage(): boolean {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  }

  login(usuario: string, password: string): boolean {
    const ok = usuario === 'admin' && password === 'admin';
    if (ok) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      this.isLoggedIn.set(true);
    }
    return ok;
  }

  logout() {
    sessionStorage.removeItem(STORAGE_KEY);
    this.isLoggedIn.set(false);
  }
}
