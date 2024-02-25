import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost, PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { ModalComponent } from '../../../blogging-library/src/lib/components/modal/modal.component';
import { CommentComponent, IComment } from '../../../blogging-library/src/lib/components/comment/comment.component';
import { HeaderComponent } from './components/header/header.component';
import { PostService } from './services/posts/post.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent,
    CommentComponent,
    ModalComponent,
  ],
  providers: [PostService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'blogging-app';
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

  public comments: IComment[] = [{
      id: 8,
      respondsTo: null,
      author: {
        id: 8,
        username: ''
      },
      timestamp: '',
      content: '',
    }];

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.post = this._postService.getPost();
    this.comments = this._postService.getPost().comments;
  }
}
