import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  id!:number;
  inscricao!: Subscription;
  aluno!:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        this.id = params['id']
        this.aluno = this.alunosService.getAluno(this.id);
        if(this.aluno == null){
          this.router.navigate(['/notfound'])
        }
      }

    )
  }

  editar(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }

}
