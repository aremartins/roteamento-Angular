import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {


constructor() { }

getAlunos(){
  return [
    {
      id:1,
      nome: 'Aretha'
    },
    {
      id:2,
      nome: 'rebecca'
    }
  ]
}

getAluno(id:number){
  let alunos = this.getAlunos();
  for(let i=0; i < alunos.length; i++){
    let aluno = alunos[i];
    if (aluno.id == id){
      return aluno;
    }
  }
  return null;
}

}
