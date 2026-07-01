import { Injectable } from '@angular/core';
import { News } from '../models/news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private news: News[] = [
    {
      id: 'abiertas-inscripciones-carreras-2026',
      title: 'Abiertas las Inscripciones a Carreras 2026',
      imageUrl: '/images/news/inscripciones-2026.jpg',
      tags: ['inscripciones'],
      contentHtml:
        '<p>Ya se encuentran abiertas las inscripciones para las carreras que ofrece la institución durante el ciclo 2026: Profesorado de Educación Primaria, Profesorado de Educación Física, Tecnicatura Superior en Enfermería y Tecnicatura Superior en Administración de Pymes.</p><p>Quienes deseen matricularse deberán presentar la documentación requerida en la sede de Larrea 276, de lunes a viernes en el horario de atención habitual. Recomendamos a los aspirantes revisar con anticipación la lista de requisitos correspondiente a cada carrera.</p>',
      createdAt: new Date('2026-02-02'),
    },
    {
      id: 'difusion-cobertura-01-2026',
      title: 'Difusión Cobertura N° 01/2026',
      imageUrl: '/images/news/difusion-cobertura.jpg',
      tags: ['cobertura-catedras', 'difusion'],
      contentHtml:
        '<p>Se pone en conocimiento de docentes interesados la nómina de cátedras y horas disponibles a cubrir correspondientes a la Difusión de Cobertura N° 01/2026.</p><p>La documentación completa con el detalle de espacios curriculares, carga horaria y turnos se encuentra disponible para su descarga.</p>',
      createdAt: new Date('2026-02-03'),
    },
    {
      id: 'difusion-cobertura-01-2026-actualizacion',
      title: 'Difusión Cobertura N° 01/2026 – Actualización de vacantes',
      imageUrl: '/images/news/difusion-cobertura.jpg',
      tags: ['cobertura-catedras', 'difusion'],
      contentHtml:
        '<p>Se informa una actualización sobre la Difusión de Cobertura N° 01/2026, incorporando nuevas vacantes surgidas con posterioridad a la publicación original.</p><p>Se solicita a los interesados verificar el listado completo antes de presentarse a inscripción.</p>',
      createdAt: new Date('2026-02-03'),
    },
    {
      id: 'difusion-cobertura-02-2026',
      title: 'Difusión Cobertura N° 02/2026',
      imageUrl: '/images/news/difusion-cobertura.jpg',
      tags: ['cobertura-catedras', 'difusion'],
      contentHtml:
        '<p>Nueva publicación de Difusión de Cobertura correspondiente al mes de febrero, con la nómina de cátedras vacantes a cubrir en distintas carreras de la institución.</p><p>Los docentes interesados deberán presentarse en los días y horarios establecidos para la inscripción a la cobertura.</p>',
      createdAt: new Date('2026-02-04'),
    },
    {
      id: 'difusion-cobertura-03-2026',
      title: 'Difusión Cobertura N° 03/2026',
      imageUrl: '/images/news/difusion-cobertura.jpg',
      tags: ['cobertura-catedras', 'difusion'],
      contentHtml:
        '<p>Se publica la Difusión de Cobertura N° 03/2026 con la actualización de espacios curriculares disponibles para su cobertura docente.</p><p>Recordamos a los aspirantes a cargos y horas cátedra consultar el listado de anexos y disposiciones vigentes antes de presentar su inscripción.</p>',
      createdAt: new Date('2026-02-05'),
    },
    {
      id: 'novedades-sad-2026',
      title: 'Novedades del Sistema de Administración Docente (SAD)',
      imageUrl: '/images/news/novedades-sad.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se comunican novedades vinculadas al funcionamiento del Sistema de Administración Docente (SAD) para el presente ciclo lectivo, incluyendo modificaciones en los procedimientos de carga y consulta para el personal docente.</p><p>Ante cualquier consulta, el personal puede acercarse a la secretaría de la institución.</p>',
      createdAt: new Date('2026-02-06'),
    },
    {
      id: 'cobertura-catedras-convocatoria-general',
      title: 'Cobertura de Cátedras – Convocatoria General',
      imageUrl: '/images/news/cobertura-catedras.jpg',
      tags: ['cobertura-catedras'],
      contentHtml:
        '<p>Se realiza la convocatoria general de cobertura de cátedras para el ciclo lectivo 2026, correspondiente a los distintos profesorados y tecnicaturas de la institución.</p><p>La inscripción se realizará en los plazos y condiciones establecidos por la normativa vigente en la materia.</p>',
      createdAt: new Date('2026-02-10'),
    },
    {
      id: 'publicacion-calendario-academico-2026',
      title: 'Publicación del Calendario Académico 2026',
      imageUrl: '/images/news/calendario-academico.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Ya se encuentra disponible el Calendario Académico correspondiente al ciclo 2026, con las fechas de inicio y finalización de cuatrimestres, mesas de examen y jornadas institucionales.</p><p>Se recomienda a estudiantes y docentes tenerlo presente para la organización de sus actividades durante el año.</p>',
      createdAt: new Date('2026-02-20'),
    },
    {
      id: 'inicio-ciclo-lectivo-2026',
      title: 'Inicio del Ciclo Lectivo 2026',
      imageUrl: '/images/news/inicio-ciclo-lectivo.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Damos inicio al Ciclo Lectivo 2026 en todas las carreras de la institución. Se recuerda a las y los estudiantes ingresantes y avanzados verificar los horarios y aulas asignadas en la cartelera y canales oficiales.</p><p>¡Deseamos a toda la comunidad educativa un excelente comienzo de año!</p>',
      createdAt: new Date('2026-03-02'),
    },
    {
      id: 'jornada-bienvenida-ingresantes-2026',
      title: 'Jornada de Bienvenida a Ingresantes 2026',
      imageUrl: '/images/news/bienvenida-ingresantes.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se realizó la Jornada de Bienvenida para las y los estudiantes ingresantes al ciclo 2026, donde equipos directivos y docentes presentaron la propuesta académica de cada carrera y brindaron información sobre trayectorias, prácticas docentes y vida institucional.</p><p>Agradecemos la participación de toda la comunidad en esta nueva etapa.</p>',
      createdAt: new Date('2026-03-06'),
    },
    {
      id: 'tecnicatura-psicopedagogia-ciclo-cerrado',
      title: 'Tecnicatura Superior en Psicopedagogía (Ciclo Cerrado)',
      imageUrl: '/images/news/psicopedagogia-ciclo-cerrado.jpg',
      tags: ['institucional', 'carreras'],
      contentHtml:
        '<p>Se informa que la Tecnicatura Superior en Psicopedagogía se encuentra actualmente en modalidad de Ciclo Cerrado, por lo que no se recibirán nuevas inscripciones hasta que se habilite una nueva cohorte.</p><p>Quienes ya se encuentren cursando podrán continuar normalmente su trayectoria académica.</p>',
      createdAt: new Date('2026-03-13'),
    },
    {
      id: 'no-se-dictara-especializacion-alteracion-desarrollo',
      title:
        'No se dictará la Especialización Docente de Nivel Superior para Estudiantes con Alteración en el Desarrollo y la Constitución Subjetiva',
      imageUrl: '/images/news/especializacion-suspendida.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se comunica a la comunidad educativa que, por no alcanzarse el número mínimo de inscriptos, no se dictará durante el presente ciclo la Especialización Docente de Nivel Superior para Estudiantes con Alteración en el Desarrollo y la Constitución Subjetiva.</p><p>Se evaluará su apertura en próximas convocatorias.</p>',
      createdAt: new Date('2026-03-20'),
    },
    {
      id: 'charlas-informativas-profesorado-educacion-fisica',
      title: 'Charlas informativas sobre el Profesorado de Educación Física',
      imageUrl: '/images/news/charla-educacion-fisica.jpg',
      tags: ['carreras', 'institucional'],
      contentHtml:
        '<p>La institución realizó charlas informativas destinadas a estudiantes secundarios interesados en el Profesorado de Educación Física, donde se presentó el plan de estudios, el campo laboral y las condiciones de ingreso a la carrera.</p><p>Quienes no pudieron asistir pueden acercarse a la secretaría para recibir la información correspondiente.</p>',
      createdAt: new Date('2026-04-02'),
    },
    {
      id: 'feria-carreras-2026',
      title: 'Feria de Carreras 2026',
      imageUrl: '/images/news/feria-carreras.jpg',
      tags: ['institucional', 'carreras'],
      contentHtml:
        '<p>La institución participó de la Feria de Carreras 2026 acercando a la comunidad su propuesta académica en formación docente y técnica. Estudiantes y docentes brindaron información sobre cada una de las carreras disponibles.</p><p>Agradecemos a quienes se acercaron a conocer nuestra propuesta educativa.</p>',
      createdAt: new Date('2026-04-15'),
    },
    {
      id: 'capacitacion-docente-tic',
      title: 'Capacitación docente en TIC aplicadas a la enseñanza',
      imageUrl: '/images/news/capacitacion-tic.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se llevó a cabo una jornada de capacitación destinada al plantel docente sobre el uso de tecnologías de la información y la comunicación aplicadas a la enseñanza en el nivel superior.</p><p>La propuesta se enmarca en las acciones de formación continua que impulsa la institución.</p>',
      createdAt: new Date('2026-04-28'),
    },
    {
      id: 'jornada-institucional-mayo-2026',
      title: 'Jornada Institucional de Reflexión y Trabajo',
      imageUrl: '/images/news/jornada-institucional.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se desarrolló una jornada institucional destinada a equipos docentes y directivos, orientada al trabajo conjunto sobre trayectorias estudiantiles y estrategias de acompañamiento en las distintas carreras.</p><p>La actividad contó con la participación de referentes de cada profesorado y tecnicatura.</p>',
      createdAt: new Date('2026-05-04'),
    },
    {
      id: 'cierre-primer-cuatrimestre-2026',
      title: 'Cierre del Primer Cuatrimestre 2026',
      imageUrl: '/images/news/cierre-cuatrimestre.jpg',
      tags: ['institucional'],
      contentHtml:
        '<p>Se informa a las y los estudiantes que se aproxima el cierre del primer cuatrimestre del ciclo 2026. Se recuerda revisar el Calendario Académico para conocer las fechas de mesas de examen y períodos de regularización.</p><p>Ante dudas sobre situaciones académicas particulares, pueden acercarse a la secretaría de alumnos.</p>',
      createdAt: new Date('2026-05-15'),
    },
    {
      id: 'asamblea-anual-ordinaria-cooperadora-2026',
      title: '📅 HOY 17hs · Asamblea Anual Ordinaria de la Cooperadora',
      imageUrl: '/images/news/asamblea-cooperadora.jpg',
      tags: ['cooperadora', 'institucional'],
      contentHtml:
        '<p>Se convoca a toda la comunidad educativa a la Asamblea Anual Ordinaria de la Asociación Cooperadora, a realizarse hoy a las 17hs en la sede de la institución.</p><p>Se tratarán la memoria y balance del ejercicio, y se renovarán autoridades de la comisión directiva. Se invita a socios y socias a participar activamente.</p>',
      createdAt: new Date('2026-05-20'),
    },
    {
      id: 'difusion-cobertura-04-2026-psicopedagogia',
      title: 'Difusión Cobertura N° 04/2026 – Psicopedagogía',
      imageUrl: '/images/news/difusion-cobertura.jpg',
      tags: ['cobertura-catedras', 'difusion'],
      contentHtml:
        '<p>Se publica la Difusión de Cobertura N° 04/2026, correspondiente a espacios curriculares de la Tecnicatura Superior en Psicopedagogía.</p><p>Los docentes interesados en la cobertura de dichos espacios deberán presentarse en los plazos establecidos, aportando la documentación requerida.</p>',
      createdAt: new Date('2026-05-21'),
    },
    {
      id: 'resultados-asamblea-cooperadora-2026',
      title: 'Resultados de la Asamblea Anual Ordinaria de la Cooperadora',
      imageUrl: '/images/news/resultados-asamblea.jpg',
      tags: ['cooperadora', 'institucional'],
      contentHtml:
        '<p>Se informan los resultados de la Asamblea Anual Ordinaria de la Asociación Cooperadora realizada esta semana, en la que se aprobó la memoria y balance del ejercicio y se eligió la nueva comisión directiva.</p><p>Agradecemos a las familias y docentes que participaron y renovaron su compromiso con la institución.</p>',
      createdAt: new Date('2026-05-25'),
    },
  ];

  add(item: News): void {
    this.news.unshift(item);
  }
  delete(id: string): void {
    this.news = this.news.filter((n) => n.id !== id);
  }

  getAll(): News[] {
    return this.news;
  }

  getById(id: string): News | undefined {
    return this.news.find((n) => n.id === id);
  }

  searchByTitle(query: string): News[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return this.getAll();

    return this.news.filter((n) => n.title.toLowerCase().includes(normalized));
  }

  getAllSortedByDate(): News[] {
    return [...this.news].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
