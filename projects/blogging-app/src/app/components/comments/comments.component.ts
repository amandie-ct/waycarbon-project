import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from './services/comments.service';
import { IComment } from './types/comment.interface';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule, CommonModule, CommentComponent, CommentFormComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  providers: [CommentsService],
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: number;

  comments: IComment[] = [];
  activeComment: IComment | null = null;
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }

  addComment({
    text,
    respondsTo,
  }: {
    text: string;
    respondsTo: number | null;
  }): void {
    this.commentsService
      .createComment(text, respondsTo)
      .subscribe((createdComment) => {
        this.comments = [...this.comments, createdComment];
      });
  }

  getReplies(commentId: number): IComment[] {
    return this.comments.filter(
      (comment) =>
        comment.respondsTo !== null && comment.respondsTo.id === commentId
    );
  }
}
