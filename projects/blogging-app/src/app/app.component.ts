import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ModalContainerComponent } from '../../../blogging-library/src/lib/components/modal-container/modal-container.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent,
    CommentsComponent,
    ModalContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent  {
  title = 'blogging-app';
  openModal: boolean = false;

}
