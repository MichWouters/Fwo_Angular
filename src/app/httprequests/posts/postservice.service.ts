import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})

export class Postservice {
  url = 'https://fwo-angular-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) { 

  }

  createPost(postData: Post) {
    return this.http
      .post<{ name: string }>(this.url, postData);
  }

  getPosts() {
    return this.http
      .get<{ [key: string]: any }>(this.url)
      .pipe(map((response) => {
        const postsArray: Post[] = [];
        
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            postsArray.push({ ...response[key], id: key })
          }
        }
        
        return postsArray;
      }));
  }
}
