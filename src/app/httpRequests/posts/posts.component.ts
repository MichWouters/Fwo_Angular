import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  loadedPosts: Post[] = [];
  isLoading: boolean = false;
  hasError = false;
  errorMessage = '';

  constructor(private postService: PostsService) { }

  ngOnInit() { }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createPost(postData)
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => { alert(error.message); console.log(error) },
        complete: () => console.log('Data posted'),
      });
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postService.getPosts()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.loadedPosts = data;
        },
        error: (error) => {
          alert(error.message);
          console.log(error);
          this.isLoading = false;
          this.hasError = true;
          this.errorMessage = error.message;

        },
        complete: () => {
          console.log('Data fetched');
          this.isLoading = false;
        },
      })
  }

  onClearPosts() {
    // Send Http request
  }
}