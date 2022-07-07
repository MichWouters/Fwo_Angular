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
  setText(text: string){
    this.text = text
  }

  checkAuth(callback: any){
    this.setText('Checking Auth...')
    setTimeout(() => {
      callback(true);
    }, 2000);
  };

  fetchUser(callback: any): any{
    this.setText('Fetching User...')
    setTimeout(() => {
      callback({ name: "Max" });
    }, 2000);
  };

  runCallbacks(): void {
    this.checkAuth((isAuthorized: boolean) => {
      if (isAuthorized) {
        this.fetchUser((user: { name: string; }) => {
          this.setText(user.name)
        })
      }
    })
  }

}
