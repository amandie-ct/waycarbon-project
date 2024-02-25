import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: number;

  constructor(private commentsService: CommentsService) {

  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments => {
      console.log('comments', comments)
    })
  }
}
