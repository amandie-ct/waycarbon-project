import { Component } from '@angular/core';

@Component({
  selector: 'lib-poster',
  standalone: true,
  imports: [],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {
  username = 'João Figueiredo'
  avatar = 'projects/blogging-app/src/assets/avatar1.jpg'
  date = '20 de fev, 2019'

}
