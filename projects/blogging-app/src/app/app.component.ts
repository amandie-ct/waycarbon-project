import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost, PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
// import { PostService } from './services/posts/post.service';
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
  // providers: [PostService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent  {
  title = 'blogging-app';
  openModal: boolean = false;

  public post: IPost = {
    id: 0,
    timestamp: '',
    author: {
      id: 1,
      username: '',
      avatar: ''
    },
    title: '',
    subtitle: '',
    content: '',
    comments: [{
      id: 1,
      respondsTo: null,
      author: {
        id: 1,
        username: ''
      },
      timestamp: '',
      content: ''
    }]
  }


  // constructor(private _postService: PostService) {}

  // ngOnInit() {
  //   this.post = this._postService.getPost();
  // }
}
