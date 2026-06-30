import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  fecha: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css'],
})
export class Timeline implements AfterViewInit, OnDestroy {
  @ViewChild('lineBg') lineBg!: ElementRef<HTMLElement>;
  @ViewChild('lineFill') lineFill!: ElementRef<HTMLElement>;

  @ViewChildren('dotRef') dotRefs!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef<HTMLElement>>;

  events: TimelineEvent[] = [
    {
      fecha: '1985',
      titulo: 'Creación del Instituto',
      texto:
        'Se crea el Instituto de Formación Docente con la carrera de Magisterio Normal Superior. Matrícula inicial: 86 estudiantes.',
    },
    {
      fecha: '1986',
      titulo: 'Nuevo profesorado',
      texto: 'Se suma el Profesorado Especializado en Educación Preescolar.',
    },
    {
      fecha: '1987',
      titulo: 'Autonomía y primer postgrado',
      texto:
        'El Instituto alcanza plena autonomía y abre su primera carrera de postgrado: Profesorado de Educación Preescolar. Cambia el plan de estudios con un Tronco Común inicial.',
    },
    {
      fecha: '1988',
      titulo: 'Capacitación para supervisión docente',
      texto:
        'Comienza a dictarse la Capacitación para la función Supervisora Docente, en modalidad no residente, los días sábados.',
    },
    {
      fecha: '1990 - 1991',
      titulo: 'Crecimiento de la matrícula',
      texto:
        'Fuerte ascenso de la matrícula y apertura de la carrera de ciclo cerrado Asistente Educacional (3 años de duración).',
    },
    {
      fecha: '1991',
      titulo: 'Capacitación Docente Nivel I y II',
      texto:
        'Se agrega esta propuesta en modalidad no residente, dictada los días sábados. La matrícula anual llega a 268 estudiantes.',
    },
    {
      fecha: '1992',
      titulo: 'Primera carrera técnica',
      texto:
        'Apertura del Técnico Superior en Administración Agraria, primera carrera técnica del Instituto.',
    },
    {
      fecha: '1993',
      titulo: 'Diversificación de la oferta',
      texto:
        'Se abren el Técnico Superior en Programación, el Profesorado en Educación en Jardín Maternal y el Analista en Sistemas de Información. Stella Garralda asume como directora titular.',
    },
    {
      fecha: '1997',
      titulo: 'Analista en Calidad de Alimentos',
      texto:
        'Nueva carrera en cogestión con la Municipalidad de Rauch y organismos provinciales vinculados al sector alimenticio.',
    },
    {
      fecha: '2005 - 2006',
      titulo: 'Biblioteca',
      texto:
        'María de los Ángeles Peralta titulariza como bibliotecaria y se abre un segundo cargo de biblioteca en el turno tarde.',
    },
    {
      fecha: '2008',
      titulo: 'Nueva secretaria',
      texto: 'María de los Ángeles Peralta asume como secretaria de la institución.',
    },
    {
      fecha: '2011',
      titulo: 'Cambio de dirección',
      texto:
        'Stella Garralda se jubila tras casi 20 años como directora. María de los Ángeles Peralta asume el cargo de directora.',
    },
    {
      fecha: '2015',
      titulo: 'Jubilaciones',
      texto:
        'Se jubilan la directora María de los Ángeles Peralta y la preceptora María Beatriz Palazzo.',
    },
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    // Tengo que implementar los dos :P
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    if (!this.lineBg || !this.lineFill) {
      return;
    }

    const viewportMiddle = window.innerHeight / 2;

    const lineRect = this.lineBg.nativeElement.getBoundingClientRect();
    const filled = Math.min(Math.max(viewportMiddle - lineRect.top, 0), lineRect.height);
    this.renderer.setStyle(this.lineFill.nativeElement, 'height', `${filled}px`);

    const dots = this.dotRefs?.toArray() ?? [];
    let closestIndex = -1;
    let closestDistance = Infinity;

    dots.forEach((dotRef, i) => {
      const rect = dotRef.nativeElement.getBoundingClientRect();
      const center = rect.top + rect.height / 2;

      if (center <= viewportMiddle) {
        this.renderer.addClass(dotRef.nativeElement, 'timeline-dot-active');
      } else {
        this.renderer.removeClass(dotRef.nativeElement, 'timeline-dot-active');
      }

      const distance = Math.abs(center - viewportMiddle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    const cards = this.cardRefs?.toArray() ?? [];
    cards.forEach((cardRef, i) => {
      if (i === closestIndex) {
        this.renderer.addClass(cardRef.nativeElement, 'timeline-card-active');
      } else {
        this.renderer.removeClass(cardRef.nativeElement, 'timeline-card-active');
      }
    });
  }
}
