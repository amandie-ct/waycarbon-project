import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

export interface IComment {
    id: number,
    respondsTo: null | {id: number},
    author: {
      id: number,
      username: string
    };
    timestamp: string;
    content: string;
}
@Component({
  selector: 'lib-comment',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})

export class CommentComponent {
  @Input() comments: IComment[] = [{
    id: 8,
    respondsTo: null,
    author: {
      id: 8,
      username: ''
    },
    timestamp: '',
    content: '',
  }];

  faRetweet = faRetweet;
  faFlag = faFlag;
  showReplyBox = false;

  toggleReplyBox = () => {
    this.showReplyBox = !this.showReplyBox;
  };
}
