import { Component } from '@angular/core';

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postImage = './assets/header-image.jpg';
  postTitle = 'Estratégias para um novo paradigma globalizado';
  postSubtitle = 'Sobre o cuidado em identificar pontos críticos na complexidade';
}
