import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../types/comment.interface';
import { Observable } from 'rxjs';

@Injectable()

export class CommentsService {

    constructor(private httpClient: HttpClient) {}
    getComments(): Observable<IComment[]> {
        return this.httpClient.get<IComment[]>('http://localhost:3000/comments')
    }

}