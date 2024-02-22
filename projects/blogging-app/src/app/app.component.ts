import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from '../../../blogging-library/src/lib/components/post/post.component';
import { PosterComponent } from '../../../blogging-library/src/lib/components/poster/poster.component';
import { ReplyComponent } from '../../../blogging-library/src/lib/components/reply/reply.component';
import { ModalComponent } from '../../../blogging-library/src/lib/components/modal/modal.component';
import { HeaderComponent } from '../../../blogging-library/src/public-api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PostComponent, PosterComponent, ReplyComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogging-app';
}

