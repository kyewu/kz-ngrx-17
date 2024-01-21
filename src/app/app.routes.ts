import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () => import('./home/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter/counter.route').then((mod) => mod.counterRoutes),
  },
];
