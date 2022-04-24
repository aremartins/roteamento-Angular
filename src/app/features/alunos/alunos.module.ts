import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosRoutes } from './alunos.routing';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlunosComponent, AlunoComponent, AlunoFormComponent],
  imports: [
    CommonModule,
    AlunosRoutes,
    MaterialModule,
    FormsModule
  ]
})
export class AlunosModule { }
