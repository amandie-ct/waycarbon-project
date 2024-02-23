import { Injectable } from '@angular/core';
import USERS from './users-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() { return USERS; }
  
  constructor() { }
}
