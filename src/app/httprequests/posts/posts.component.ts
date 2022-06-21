import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { Postservice } from './postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private postservice: Postservice) { }

  ngOnInit() {
  }

  onCreatePost(postData: Post) {
    this.postservice.createPost(postData)
      .subscribe({
        next: (data) => { console.log(data) },
        error: () => { console.log('Post failed') },
        complete: () => { console.log('Data posted') },
      });
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postservice.getPosts()
      .subscribe({
        next: (posts) => { this.loadedPosts = posts },
        error: () => { console.log('Fetch failed') },
        complete: () => { console.log('Data retrieved'), this.isLoading = false },
      });;
  }

  onClearPosts() {
    // Send Http request
  }
}
