import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
registerLocaleData(localeBR);

export interface IComment {
  id: number;
  respondsTo: null | { id: number };
  author: {
    id: number;
    username: string;
  };
  timestamp: string;
  content: string;
}
@Component({
  selector: 'lib-comment',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input() comments!: IComment[];
  showReplyBox = true;
  faRetweet = faRetweet;
  faFlag = faFlag;
  replyContent: string[] = [];

  toggleReplyBox(index: number): void {
    console.log()
    this.showReplyBox = true;
    if (!this.replyContent[index]) {
      this.replyContent[index] = '';
    }
  }

  submitReply(comment: any, replyContent: string): void {
    const reply = {
      id: this.getNextId(),
      content: replyContent,
      author: { username: 'Convidado' },
      timestamp: new Date().toISOString(),
    };
    comment.children.push(reply);
    console.log(reply);
    comment.showReplyBox = false;
  }

  getNextId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
