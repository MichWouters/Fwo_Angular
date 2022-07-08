import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.css']
})
export class CallbacksComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string): void{
    this.name = text;
  }

  checkAuth(callback: any){
    this.setText('Checking Auth...');
    setTimeout(() => {
      callback(true);
    }, 2000);
  }

  fetchUser(callback: any){
    this.setText('Fetching user...');
    setTimeout(() => {
      callback({id: 1, name: 'Michiel'});
    }, 2000);
  }

  // CallBack Hell -> Try to avoid CB. Legacy way of working
  runCallBacks(): void{
    this.checkAuth((isAuthorized: boolean) => {
      if (isAuthorized) {
        this.fetchUser((user: {id: any, name: string}) => {
          this.setText(user.name);
        })
      }
    })
  }
}
