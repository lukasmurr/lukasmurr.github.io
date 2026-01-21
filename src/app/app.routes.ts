import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'webdev',
    loadComponent: () => import('./pages/webdev.component').then(m => m.WebdevComponent)
  },
  {
    path: 'devops',
    loadComponent: () => import('./pages/devops.component').then(m => m.DevopsComponent)
  },
  {
    path: 'gaming',
    loadComponent: () => import('./pages/gaming.component').then(m => m.GamingComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
