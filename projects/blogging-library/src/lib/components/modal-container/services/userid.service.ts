import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserIdService {
  private userId: number = 0;

  constructor() { }

  getUserId(): number {
    return this.userId;
  }

  setUserId(userId: number): void {
    this.userId = userId;
  }
}