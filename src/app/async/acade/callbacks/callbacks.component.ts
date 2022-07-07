import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.css']
})
export class CallbacksComponent implements OnInit {
  text = '';
  constructor() { }

  ngOnInit(): void {
  }
  setText = (text) => {
    this.text = text
  }

  checkAuth = callback => {
    this.setText('Checking Auth...')
    setTimeout(() => {
      callback(true);
    }, 2000);
  };

  fetchUser = callback => {
    this.setText('Fetching User...')
    setTimeout(() => {
      callback({ name: "Max" });
    }, 2000);
  };

  runCallbacks() {
    this.checkAuth(isAuthorized => {
      if (isAuthorized) {
        this.fetchUser(user => {
          this.setText(user.name)
        })
      }
    })
  }

}
