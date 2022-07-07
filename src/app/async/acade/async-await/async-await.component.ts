import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string): void {
    this.text = text
  }

  checkAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.setText('Checking Auth...')
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  fetchUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setText('Fetching User...');
      setTimeout(() => {
        resolve({ name: "Max" });
      }, 2000);
    });
  };

  async runAsyncAwait(): Promise<void>{
    const isAuthorized = await this.checkAuth();
    let user = {name: 'unknown'};

    if (isAuthorized) {
      user = await this.fetchUser();
    }

    this.setText(user.name);
  }

}
