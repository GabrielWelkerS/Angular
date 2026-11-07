import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno as AlunoModel } from '../interfaces/aluno';


@Injectable({
  providedIn: 'root'
})
export class Aluno {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/alunos';

  //Listar
  listar(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.apiUrl);
  }
  //Cadastrar
  cadastrar(aluno: AlunoModel): Observable<AlunoModel> {
  return this.http.post<AlunoModel>(
    this.apiUrl,
    aluno
  );
}

//Atualizar
atualizar(id: number, aluno: AlunoModel): Observable<AlunoModel> {
  return this.http.put<AlunoModel>(
    `${this.apiUrl}/${id}`,
    aluno
  );
}

//Excluir
excluir(id: number): Observable<void> {
  return this.http.delete<void>(
    `${this.apiUrl}/${id}`
  );
}


}