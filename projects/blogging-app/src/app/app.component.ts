import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { ReplyComponent } from '../../../blogging-library/src/lib/components/reply/reply.component';
import { ModalComponent } from '../../../blogging-library/src/lib/components/modal/modal.component';
import { CommentComponent } from '../../../blogging-library/src/lib/components/comment/comment.component';
import { HeaderComponent } from '../components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PostComponent, ReplyComponent, CommentComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogging-app';
  public postTitle = "teste";
  public postSubtitle = "teste";
  public postContent = "teste";
  public postDate = "teste";
  public postAuthor = "teste";

}

