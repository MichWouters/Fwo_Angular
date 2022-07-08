import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string) {
    this.name = text;
  }

  // Async await still uses Promises to get the job done
  checkAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.setText('Checking Auth...')
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

  fetchUser(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.setText('Fetching user...');
      setTimeout(() => {
        resolve({ id: 1, name: 'Michiel' });
      }, 2000);
    });
  }

  // When it comes to readability, async await is arguably to easies to understand and expand.
  async runAsyncAwait(): Promise<void>{
    const isAuthorized: boolean = await this.checkAuth();
    let user = {id: Number, name: ''};

    if(isAuthorized){
      user = await this.fetchUser();
    }

    this.setText(user.name);
  }

}
