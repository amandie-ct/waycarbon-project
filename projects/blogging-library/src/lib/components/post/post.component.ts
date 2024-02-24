import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface IPost {
  id: string;
  timestamp: string;
  author: {
    id: number,
    username: string,
    avatar: string
  };
  title: string;
  subtitle: string;
  content: string;
  comments: [{
    id: string,
    respondsTo: null | {id: number},
    author: {
      id: string,
      username: string
    };
    timestamp: string;
    content: string;
  }]
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
    id: '',
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
      id: '',
      respondsTo: null,
      author: {
        id: '',
        username: ''
      },
      timestamp: '',
      content: ''
    }]
  };
}