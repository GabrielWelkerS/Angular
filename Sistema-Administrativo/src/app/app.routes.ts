import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'sobre',
    component: Sobre
  },
  {
    path: 'contato',
    component: Contato
  }
];