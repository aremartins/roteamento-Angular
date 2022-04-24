import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';
import { AulaComponent } from './aula/aula.component';
import { AulasFormComponent } from './aulas-form/aulas-form.component';
import { AulasComponent } from './aulas/aulas.component';

const routes: Routes = [
  {
    path: '',
    component: AulasComponent,
    children: [
      { path: 'novo', component: AulasFormComponent },
      { path: ':id', component: AulaComponent },
      { path: 'notFound', component: NotFoundComponent}
    ],
  },
];

export const AulasRoutes = RouterModule.forChild(routes);
