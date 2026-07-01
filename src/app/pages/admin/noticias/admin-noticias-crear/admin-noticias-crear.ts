import { Component, ElementRef, ViewChild, AfterViewInit, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../../services/NewsService';
import { News } from '../../../../models/news';
import Quill from 'quill';

@Component({
  selector: 'app-admin-noticias-crear',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-noticias-crear.html',
  styleUrl: './admin-noticias-crear.css',
})
export class AdminNoticiasCrear implements AfterViewInit {
  private newsService = inject(NewsService);
  private router = inject(Router);

  @ViewChild('editorContainer') editorContainer!: ElementRef;
  quill!: Quill;

  title = '';
  tagsString = '';
  imageUrl = '';

  isDragOver = signal(false);
  imagePreview = signal<string | null>(null);

  ngAfterViewInit() {
    this.quill = new Quill(this.editorContainer.nativeElement, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['link', 'blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean'],
        ],
      },
      placeholder: 'Escriba el contenido de la noticia aquí...',
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.handleFile(file);
    }
  }

  private handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      alert('Por favor seleccione únicamente archivos de imagen.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview.set(reader.result as string);
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onPublish() {
    const htmlContent = this.quill.root.innerHTML;

    if (!this.title.trim()) {
      alert('Por favor ingrese un título.');
      return;
    }
    if (this.quill.getText().trim().length === 0) {
      alert('Por favor ingrese el contenido de la noticia.');
      return;
    }

    const tags = this.tagsString
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);

    const newNews: News = {
      id:
        this.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') +
        '-' +
        Date.now(),
      title: this.title.trim(),
      imageUrl: this.imageUrl || '/images/news/placeholder.png',
      tags: tags.length > 0 ? tags : ['institucional'],
      contentHtml: htmlContent,
      createdAt: new Date(),
    };

    this.newsService.add(newNews);
    this.router.navigate(['/admin/noticias']);
  }
}
