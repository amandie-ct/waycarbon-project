import { Component, Input } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
import { IComment } from '../comments/types/comment.interface';
registerLocaleData(localeBR);

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})

export class CommentComponent {
  @Input() comment!: IComment;
}
