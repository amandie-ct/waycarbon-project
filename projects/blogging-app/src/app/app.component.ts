import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost, PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { ReplyComponent } from '../../../blogging-library/src/lib/components/reply/reply.component';
import { ModalComponent } from '../../../blogging-library/src/lib/components/modal/modal.component';
import { CommentComponent } from '../../../blogging-library/src/lib/components/comment/comment.component';
import { HeaderComponent } from '../components/header/header.component';
import { PostService } from '../posts/post.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent,
    ReplyComponent,
    CommentComponent,
    ModalComponent,
  ],
  providers: [PostService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent implements OnInit {
  title = 'blogging-app';
  public post: IPost = {};
  public comments: any[] = [{}];
  public organizedComments: any[] = [];

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.post = this._postService.getPost();
    this.comments = this._postService.getPost().comments;
    this.organizedComments = this.organizeTreeComments(this.comments);
  }

  organizeTreeComments(comments: any[]): any[] {
    const commentsMap = new Map<number, any>();

    for (const comment of comments) {
      comment.children = [];
      commentsMap.set(comment.id, comment);
    }

    for (const comment of comments) {
      if (comment.respondsTo) {
        const parentComment = commentsMap.get(comment.respondsTo.id);
        if (parentComment) {
          parentComment.children.push(comment);
        }
      }
    }

    return comments.filter((comment) => !comment.respondsTo);
  }

  toggleReplyBox(comment: any): void {
    comment.showReplyBox = !comment.showReplyBox;
  }

  submitReply(comment: any, replyContent: string): void {
    const reply = {
      id: this.getNextId(),
      content: replyContent,
      author: { username: 'User' },
      timestamp: new Date().toISOString(),
    };
    comment.children.push(reply);
    comment.showReplyBox = false;
  }

  getNextId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
