import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'import',
    loadComponent: () => import('./features/import/import').then(m => m.Import)
  }
];
