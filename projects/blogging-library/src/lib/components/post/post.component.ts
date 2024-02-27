import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLocalService } from '../../../../../blogging-app/src/services/postlocal.service';

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [CommonModule],
  providers: [PostLocalService],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {

  public post = {};
  
  constructor(private postService: PostLocalService) {
  }

  ngOnInit(): void {

    this.post = this.postService.getPost();
    // this.postService.getPost().subscribe({
    //   next: (post) => {
    //     this.post = post;
    //     console.log(this.post);
    //     this.cd.detectChanges();
    //   },
    //   error: (error) => console.error('Error fetching post:', error)
    // });

  }
}