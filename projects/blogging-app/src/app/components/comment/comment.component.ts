import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
import { IComment } from '../comments/types/comment.interface';
registerLocaleData(localeBR);
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})

export class CommentComponent implements OnInit {
  @Input() comment!: IComment;
  @Input() currentUserId!: number;
  @Input() replies!: IComment[];
  @Output() setActiveComment = new EventEmitter<IComment["id"]>();
  canReply: boolean = false;

  faRetweet = faRetweet;
  faFlag = faFlag;

  ngOnInit(): void {
    this.canReply = Boolean(this.currentUserId);
  }
}
