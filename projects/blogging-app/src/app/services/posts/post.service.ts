import { Injectable } from '@angular/core';
import POST from '../../database/post-mock';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  getPost() {
    return POST;
  }
  constructor() { }
}
