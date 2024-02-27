import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../app/types/post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}
  getPost(): Observable<IPost> {
    return this.httpClient.get<IPost>('http://localhost:3000/post');
  }
}
