import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: '', component:CursosComponent },
  { path: 'notfound' , component: NotFoundComponent },
  { path: ':id', component:CursoDetalheComponent }
];

export const CursosRoutes = RouterModule.forChild(routes);
