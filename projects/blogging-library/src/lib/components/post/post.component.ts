import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() postTitle: string = '';
  @Input() postSubtitle: string = '';
  @Input() postContent: string = '';
  @Input() postAuthor: string = '';
  @Input() postDate: string = '';
}