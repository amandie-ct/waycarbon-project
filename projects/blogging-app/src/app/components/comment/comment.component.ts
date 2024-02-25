import { Component, Input } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
import { IComment } from '../comments/types/comment.interface';
registerLocaleData(localeBR);
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})

export class CommentComponent {
  @Input() comment!: IComment;

  faRetweet = faRetweet;
  faFlag = faFlag;
}
