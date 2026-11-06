import { Component, inject } from '@angular/core';
import { Aluno } from '../../services/aluno';
import { Aluno as AlunoModel } from '../../interfaces/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.html'
})
export class Alunos {

  private alunoService = inject(Aluno);

  alunos: AlunoModel[] = [];

  ngOnInit() {
    this.alunoService.listar().subscribe({
      next: (dados) => {
        this.alunos = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar alunos:', erro);
      }
    });
  }

}