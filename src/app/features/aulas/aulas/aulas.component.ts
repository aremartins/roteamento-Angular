import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AulasService } from '../aulas.service';
import { Aula } from "../model/Aula";

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {
  aulas!: Aula[];
  displayedColumns: string[] = ['id', 'aula'];


  constructor(private aulasService: AulasService) { }

  ngOnInit(): void {
    this.aulas = this.aulasService.getAulas();
  }

}
