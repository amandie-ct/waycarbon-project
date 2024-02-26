import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IComment } from '../../../../../blogging-app/src/app/components/comments/types/comment.interface';

export interface IPost {
  id: number;
  timestamp: string;
  author: {
    id: number,
    username: string,
    avatar: string
  };
  title: string;
  subtitle: string;
  content: string;
  comments: IComment[]
};

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {
  @Input() post!: IPost
}