import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutes } from './cursos.routing';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule,  CursosRoutes],
})
export class CursosModule {}
