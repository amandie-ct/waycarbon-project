import { Injectable } from '@angular/core';
import USERS from '../mocks/users';

@Injectable({
  providedIn: 'root'
})

export class UsersLocalService {
  getUsers(id: number) {
    return USERS.filter(user => user.id === id);
  }
  constructor() { }
}