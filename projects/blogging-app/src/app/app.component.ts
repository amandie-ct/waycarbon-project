import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { ReplyComponent } from '../../../blogging-library/src/lib/components/reply/reply.component';
import { ModalComponent } from '../../../blogging-library/src/lib/components/modal/modal.component';
import { CommentComponent } from '../../../blogging-library/src/lib/components/comment/comment.component';
import { HeaderComponent } from '../components/header/header.component';
import { PostService } from '../posts/post.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PostComponent, ReplyComponent, CommentComponent, ModalComponent, DatePipe],
  providers: [PostService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'blogging-app';
  public post = {
    title: '',
    subtitle: '',
    content: '',
    timestamp: '',
    author: {
      id: 0,
      username: ''
    }

  }

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this.post = this._postService.getPost()
  }

  public postTitle = this.post.title;
  public postSubtitle = this.post.subtitle;
  public postContent = this.post.content;
  public postDate = this.post.timestamp;
  public postAuthor = this.post.author.username;
}

