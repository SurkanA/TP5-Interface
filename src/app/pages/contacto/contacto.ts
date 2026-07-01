import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class ContactoPage {
  contactForm: FormGroup;
  submitted = false;
  showSuccess = false;
  shakingFields: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern(/^\+?[\d\s\-]{7,15}$/)]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  getError(field: string): string {
    const control = this.contactForm.get(field);
    if (!control || !control.errors) return '';
    if (control.errors['required']) return 'Este campo es obligatorio.';
    if (control.errors['email']) return 'Ingresá un email válido.';
    if (control.errors['minlength']) {
      const min = control.errors['minlength'].requiredLength;
      return `Mínimo ${min} caracteres.`;
    }
    if (control.errors['pattern']) return 'Formato de teléfono inválido.';
    return 'Campo inválido.';
  }

  triggerShake(field: string) {
    this.shakingFields[field] = true;
    setTimeout(() => {
      this.shakingFields[field] = false;
    }, 500);
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        if (this.contactForm.get(key)?.invalid) {
          this.triggerShake(key);
        }
      });
      return;
    }

    const formData = this.contactForm.value;
    console.log('Formulario enviado:', JSON.stringify(formData, null, 2));

    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
      this.submitted = false;
      this.contactForm.reset();
    }, 2800);
  }
}
