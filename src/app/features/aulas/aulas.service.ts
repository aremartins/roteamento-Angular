import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AulasService {
  constructor() {}

  getAulas() {
   return [
      {
        "id": 1,
        "aula": "HTML"
      },
      {
        "id": 2,
        "aula": "CSS"
      }
    ]

  }


  // getAulas() {
  //   return this.http.get<Aula[]>(this.URL).pipe(
  //     first(),
  //     delay(2000),
  //     tap(
  //       (success) => console.log(success),
  //       (error) => console.log(error)
  //     )
  //   );

  // }

//   getAula(id:number){
//     return this.http.get<Aula>(`${this.URL}/${id}`).pipe(take(1))
//   }
// }

  getAula(id: number) {
    let aulas = this.getAulas();
    for (let i = 0; i < aulas.length; i++) {
      let aula = aulas[i];
      if (aula.id == id) {
        return aula;
      }
    }
    return null;
  }
}
