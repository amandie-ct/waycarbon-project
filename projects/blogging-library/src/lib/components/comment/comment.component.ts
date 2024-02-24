import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

export interface IComment {
    id: string,
    respondsTo: null | {id: number},
    author: {
      id: string,
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
    id: '',
    respondsTo: null,
    author: {
      id: '',
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
