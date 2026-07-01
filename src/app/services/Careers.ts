import { Injectable } from '@angular/core';
import { Career } from '../models/career';

@Injectable({ providedIn: 'root' })
export class Careers {
  private careers: Career[] = [
    {
      id: 'profesorado-educacion-primaria',
      title: 'Profesorado de Educación Primaria',
      shortDescription:
        'Formación docente para acompañar el aprendizaje de niños y niñas en los primeros años de la escolaridad primaria.',
      imageUrl: '/images/careers/primaria.png',
      summary:
        'El Profesorado de Educación Primaria forma docentes capaces de planificar, conducir y evaluar procesos de enseñanza en el nivel primario, con una mirada integral sobre las infancias y la diversidad de contextos educativos. La carrera combina formación pedagógica, disciplinar y práctica docente en escuelas asociadas desde los primeros años de cursada.',
      requirements: [
        { text: 'Completar los formularios con letra imprenta mayúscula legible.' },
        {
          text: 'Planilla de Matriculación',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Planilla-de-Matriculacion-1.doc',
        },
        {
          text: 'Solicitud de Inscripción Nivel Superior',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/12/Formacion-Docente-inicial-Tecnica-y-Artistica-Planilla-de-inscripcion-Educacion-Superior_1.pdf',
        },
        {
          text: 'Ficha Médica (a completar por el/la aspirante)',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Ficha-Medica.doc',
        },
        {
          text: 'Cumplimentar exámenes médicos clínicos, psicológicos, fonoaudiológicos y odontológicos durante la trayectoria estudiantil. Antes de cursar materias con actividad física, deberán presentarse los estudios específicos.',
        },
        { text: 'Fotocopia de D.N.I.' },
        { text: '2 fotos carnet.' },
        { text: 'Fotocopia de carnet de obra social, en caso de poseer.' },
        {
          text: 'Planilla de Salida Educativa',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/ANEXO-VII-Salida-Mayores-de-18-anos.docx',
        },
        {
          text: 'Fotocopia de Título de Nivel Secundario, registrado en Consejo Escolar y Ministerio del Interior. De no contar con el título, presentar Constancia de Título en Trámite o de materias adeudadas. Fecha límite: 30/10.',
        },
        { text: 'Presentar toda la documentación completa en folio con carpeta colgante.' },
      ],
      pdfUrl: '/pdfs/profesorado-educacion-primaria.pdf',
    },
    {
      id: 'profesorado-educacion-fisica',
      title: 'Profesorado de Educación Física',
      shortDescription:
        'Formación docente en actividad física, deporte y promoción de hábitos saludables en el ámbito educativo.',
      imageUrl: '/images/careers/educacion-fisica.jpg',
      summary:
        'El Profesorado de Educación Física prepara docentes para diseñar y llevar adelante propuestas de enseñanza vinculadas al movimiento, el deporte y la vida saludable, en distintos niveles del sistema educativo. La formación articula contenidos teóricos, prácticos y experiencias corporales con instancias de práctica docente.',
      requirements: [
        { text: 'Completar con letra imprenta mayúscula legible.' },
        {
          text: 'Planilla de Matriculación',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Planilla-de-Matriculacion-1.doc',
        },
        {
          text: 'Solicitud de Inscripción Nivel Superior',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/12/Formacion-Docente-inicial-Tecnica-y-Artistica-Planilla-de-inscripcion-Educacion-Superior_1.pdf',
        },
        {
          text: 'Ficha Médica (a completar por el/la estudiante)',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Ficha-Medica.doc',
        },
        {
          text: 'Ficha Médica a completar por médico/a',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Ficha-Estudios-Medicos-Profesorado-de-Educacion-Fisica.doc',
        },
        { text: 'Fotocopia de carnet de obra social, en caso de poseer.' },
        {
          text: 'Cumplimentar exámenes médicos clínicos, psicológicos, fonoaudiológicos y odontológicos durante la trayectoria estudiantil. Antes de cursar materias con actividad física, deberán presentarse los estudios específicos.',
        },
        { text: 'Presentar original y copia de D.N.I.' },
        { text: '2 fotos carnet.' },
        {
          text: 'Planilla de Salida Educativa',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/ANEXO-VII-Salida-Mayores-de-18-anos.docx',
        },
        {
          text: 'Original y copia de Título de Nivel Secundario, registrado en Consejo Escolar. De no contar con el título, presentar Constancia de Título en Trámite o de materias adeudadas. Fecha límite: 30/10.',
        },
        {
          text: 'Presentar toda la documentación completa en carpeta colgante y folio. Los estudios médicos pueden entregarse con posterioridad.',
        },
      ],
      pdfUrl: '/pdfs/profesorado-educacion-fisica.pdf',
    },
    {
      id: 'tecnicatura-enfermeria',
      title: 'Tecnicatura Superior en Enfermería',
      shortDescription:
        'Formación técnica en cuidado y atención de la salud, con práctica clínica desde los primeros años de la carrera.',
      imageUrl: '/images/careers/enfermeria.jpg',
      summary:
        'La Tecnicatura Superior en Enfermería forma profesionales capacitados para brindar cuidados de enfermería en distintos niveles de atención de la salud. Combina formación teórica en ciencias de la salud con prácticas clínicas supervisadas en instituciones sanitarias desde los primeros años de la carrera.',
      requirements: [
        { text: 'Completar con letra imprenta mayúscula legible.' },
        {
          text: 'Planilla de Inscripción',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Planilla-de-Matriculacion-1.doc',
        },
        {
          text: 'Solicitud de Inscripción Nivel Superior',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/12/Formacion-Docente-inicial-Tecnica-y-Artistica-Planilla-de-inscripcion-Educacion-Superior_1.pdf',
        },
        {
          text: 'Cumplimentar exámenes médicos clínicos, psicológicos, fonoaudiológicos y odontológicos durante la trayectoria estudiantil. Antes de cursar materias con actividad física, deberán presentarse los estudios específicos.',
        },
        {
          text: 'Ficha Médica (a completar por el/la aspirante)',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Ficha-Medica.doc',
        },
        {
          text: 'Planilla de Salida Educativa',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/ANEXO-VII-Salida-Mayores-de-18-anos.docx',
        },
        { text: 'Fotocopia de D.N.I.' },
        { text: '2 fotos carnet.' },
        { text: 'Fotocopia de carnet de obra social, en caso de poseer.' },
        {
          text: 'Fotocopia de Título de Nivel Secundario, registrado en Consejo Escolar. De no contar con el título, presentar Constancia de Título en Trámite o de materias adeudadas. Fecha límite: 30/10.',
        },
        { text: 'Presentar toda la documentación completa en folio con carpeta colgante.' },
      ],
      pdfUrl: '/pdfs/tecnicatura-enfermeria.pdf',
    },
    {
      id: 'tecnicatura-administracion-pymes',
      title: 'Tecnicatura Superior en Administración de Pymes',
      shortDescription:
        'Formación técnica en gestión, finanzas y administración orientada a pequeñas y medianas empresas.',
      imageUrl: '/images/careers/pymes.jpg',
      summary:
        'La Tecnicatura Superior en Administración de Pymes forma profesionales con herramientas de gestión, administración y finanzas orientadas a pequeñas y medianas empresas. La carrera pone énfasis en la aplicación práctica de conocimientos contables, organizacionales y de gestión de negocios.',
      requirements: [
        { text: 'Completar con letra imprenta mayúscula legible.' },
        {
          text: 'Planilla de Matriculación',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Planilla-de-Matriculacion-1.doc',
        },
        {
          text: 'Solicitud de Inscripción Nivel Superior',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/12/Formacion-Docente-inicial-Tecnica-y-Artistica-Planilla-de-inscripcion-Educacion-Superior_1.pdf',
        },
        {
          text: 'Cumplimentar exámenes médicos clínicos, psicológicos, fonoaudiológicos y odontológicos durante la trayectoria estudiantil. Antes de cursar materias con actividad física, deberán presentarse los estudios específicos.',
        },
        {
          text: 'Ficha Médica (a completar por el/la aspirante)',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/Ficha-Medica.doc',
        },
        { text: '2 fotos carnet.' },
        {
          text: 'Planilla de Salida Educativa',
          link: 'https://isfdyt70-bue.infd.edu.ar/sitio/wp-content/uploads/2025/11/ANEXO-VII-Salida-Mayores-de-18-anos.docx',
        },
        { text: 'Fotocopia de carnet de obra social, en caso de poseer.' },
        {
          text: 'Fotocopia de Título de Nivel Secundario, registrado en Consejo Escolar. De no contar con el título, presentar Constancia de Título en Trámite o de materias adeudadas. Fecha límite: 30/10.',
        },
        { text: 'Presentar toda la documentación completa en folio con carpeta colgante.' },
      ],
      pdfUrl: '/pdfs/tecnicatura-administracion-pymes.pdf',
    },
  ];

  getAll(): Career[] {
    return this.careers;
  }

  getById(id: string): Career | undefined {
    return this.careers.find((c) => c.id === id);
  }
}
