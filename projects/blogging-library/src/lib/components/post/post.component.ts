import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../../../../../blogging-app/src/app/types/post.interface';
import { PostService } from '../../../../../blogging-app/src/services/post.service';

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {

  post!: IPost;
  
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPost().subscribe(post => this.post = post);
  }
}