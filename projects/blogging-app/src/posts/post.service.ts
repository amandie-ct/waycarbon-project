import { Injectable } from '@angular/core';
import POST from './post-mock';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  getPost() {
    return POST;
  }
  constructor() { }
}
