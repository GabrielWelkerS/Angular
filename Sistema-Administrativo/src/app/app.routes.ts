import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';
import { Alunos } from './pages/alunos/alunos';

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
  ,
  {
    path: 'alunos',
    component: Alunos
  }
];