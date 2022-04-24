import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasComponent } from './aulas/aulas.component';
import { AulaComponent } from './aula/aula.component';
import { AulasFormComponent } from './aulas-form/aulas-form.component';
import { AulasRoutes } from './aulas.routing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [AulasComponent, AulaComponent, AulasFormComponent],
  imports: [CommonModule, AulasRoutes, HttpClientModule, MaterialModule],
})
export class AulasModule {}
