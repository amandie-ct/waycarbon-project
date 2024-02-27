import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../app/types/comment.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {
  generateId() {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1
    return Math.floor(randomNumber * 12 + 1); //
  }

  constructor(private httpClient: HttpClient) {}
  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('http://localhost:3000/comments');
  }

  createComment(
    text: string,
    respondsTo: number | null,
  ): Observable<IComment> {
    return this.httpClient.post<IComment>('http://localhost:3000/comments', {
      id: this.generateId(),
      respondsTo,
      author: {
        id: 1,
        username: 'João Figueiredo',
      },
      timestamp: new Date().toISOString(),
      content: text,
    });
  }
}
