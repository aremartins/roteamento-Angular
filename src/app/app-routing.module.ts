import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';
import { CursosGuard } from './features/cursos/guards/cursos.guard';

import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { PaginaNaoEncontradaComponent } from './shared/components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'alunos',
    loadChildren: () =>
      import('./../app/features/alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path:'aulas',
    loadChildren: () =>
    import('../app/features/aulas/aulas.module').then((m)=> m.AulasModule),
    canActivate: [AuthGuard]
  },

  {
    path:'cursos',
    loadChildren: () => import('../app//features/cursos/cursos.module').then((m)=>m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
