import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AulasService } from '../aulas.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.scss'],
})
export class AulaComponent implements OnInit {
  id!: number;
  inscricao!: Subscription;
  aula: any;

  constructor(private aulasService: AulasService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
        this.aula = this.aulasService.getAula(this.id)
        if(this.aula == null){
          this.router.navigate(['/notFound'])
        }
      })
  }
}
