import { Component, inject, signal } from '@angular/core';
import { Aluno } from '../../services/aluno';
import { Aluno as AlunoModel } from '../../interfaces/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.html'
})
export class Alunos {

  private alunoService = inject(Aluno);

  alunos = signal<AlunoModel[]>([]);

  ngOnInit() {
    this.alunoService.listar().subscribe({
      next: (dados) => {
        console.log('Dados recebidos:', dados);
        this.alunos.set(dados);
        console.log('Dados no Signal:', this.alunos());
      },
      error: (erro) => {
        console.error('Erro:', erro);
      }
    });
  }
}