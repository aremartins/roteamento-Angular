import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos/alunos.component';

const routes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoComponent },
      { path: ':id/edit', component: AlunoFormComponent },
    ],
  },
];

export const AlunosRoutes = RouterModule.forChild(routes);
