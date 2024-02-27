import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../app/types/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getUser(userId: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`http://localhost:3000/users?id=${userId}`);
  }
}
