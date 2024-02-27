import { Injectable } from '@angular/core';
import POST from '../mocks/post';

@Injectable({
  providedIn: 'root'
})

export class PostLocalService {
  getPost() {
    return POST;
  }
  constructor() { }
}