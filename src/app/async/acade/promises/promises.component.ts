import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string) {
    this.text = text
  }

  checkAuth():Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.setText('Checking Auth...')
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  fetchUser(): any {
    return new Promise((resolve, reject) => {
      this.setText('Fetching User...');
      setTimeout(() => {
        resolve({ name: "Max" });
      }, 2000);
    });
  };

  RunPromises(): void {
    this.checkAuth()
      .then(
        isAuthorized => {
          if (isAuthorized) {
            return this.fetchUser();
          }
        }
      )
      .then(
        user => {
          this.setText(user.name);
        }
      )
  };
}