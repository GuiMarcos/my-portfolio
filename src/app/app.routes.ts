import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'allProjects',
    loadComponent: () =>
      import('./features/all-projects/all-projects').then((m) => m.AllProjectsComponent),
  },
];
