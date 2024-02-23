import { Component } from '@angular/core';

@Component({
  selector: 'lib-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  username = 'Joana Vasconcellos';
  date = '19 de fev 2023';
  time = '8h21'
  commentText = ' O empenho em analisar a consolidação das estruturas oferece uma interessante oportunidade para verificação do retorno esperado a longo prazo. Por outro lado, o julgamento imparcial das eventualidades facilita a criação dos modos de operação convencionais.'
}
