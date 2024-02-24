import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IComment } from '../comment/comment.component';

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
  @Input() post: IPost = {
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
  };
}