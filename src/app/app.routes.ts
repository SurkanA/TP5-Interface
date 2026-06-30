import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin-guard';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio),
      },
      {
        path: 'nuestra-historia',
        loadComponent: () =>
          import('./pages/nuestra-historia/nuestra-historia').then((m) => m.NuestraHistoria),
      },
      {
        path: 'noticias',
        loadComponent: () =>
          import('./pages/noticias/noticias-list/noticias-list').then((m) => m.NoticiasList),
      },
      {
        path: 'noticias/:id',
        loadComponent: () =>
          import('./pages/noticias/noticias-detalle/noticias-detalle').then(
            (m) => m.NoticiasDetalle,
          ),
      },
      {
        path: 'carreras/:id',
        loadComponent: () => import('./pages/carreras/carrera/carrera').then((m) => m.Carrera),
      },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/admin/login/login').then((m) => m.Login),
      },
      {
        path: 'noticias',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./pages/admin/noticias/admin-noticias-list/admin-noticias-list').then(
            (m) => m.AdminNoticiasList,
          ),
      },
      {
        path: 'noticias/crear',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./pages/admin/noticias/admin-noticias-crear/admin-noticias-crear').then(
            (m) => m.AdminNoticiasCrear,
          ),
      },
    ],
  },

  { path: '**', redirectTo: 'inicio' },
];
