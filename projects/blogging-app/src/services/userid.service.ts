import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../app/types/user.interface';
@Injectable({
  providedIn: 'root'
})

export class UserIdService {
  private userSource = new BehaviorSubject<IUser>(
    {
      id: 0,
      username: 'João',
      memberSince: "2016-02-01T18:19Z",
      friendsIds: [2, 4],
      posts: [{
        id: 13,
        title: 'Meu blog',
        subtitle: 'Bem vindo',
        content: 'Conteúdo'
      }]
    }
  );

  setUser(user: IUser): void {
    this.userSource.next(user);
  }

  getUser(): Observable<IUser> {
    return this.userSource.asObservable();
  }
  

  private userIdSource = new BehaviorSubject<number>(0);
  currentUserId = this.userIdSource.asObservable();

  changeCurrentUserId(userId: number) {
    this.userIdSource.next(userId);
  }

  }
