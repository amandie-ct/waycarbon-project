import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {

  constructor(private httpClient: HttpClient) {}

  getUser(userId: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`http://localhost:3000/users/${userId}`)
  }
}
