import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string) {
    this.name = text;
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
      this.setText('Fetching user...');
      setTimeout(() => {
        resolve({ id: 1, name: 'Michiel' });
      }, 2000);
    });
  }

  // Promises are much easier to read thanks to the then function
  // No more unnecessary nesting.
  runPromises(): void {
    this.checkAuth()
      .then(isAuthorized => {
          if (isAuthorized) {
            return this.fetchUser();
          }
          else{
            return null;
          }
        }
      )
      .then(user => {
          this.setText(user.name);
        }
      )
  };
}
