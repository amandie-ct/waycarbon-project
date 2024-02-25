import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from './services/comments.service';
import { IComment } from './types/comment.interface';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
registerLocaleData(localeBR);
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: number;

  comments: IComment[] = [];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments => {
      this.comments = comments;
    })
  }
}
