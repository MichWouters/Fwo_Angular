import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-prep',
  templateUrl: './async-prep.component.html',
  styleUrls: ['./async-prep.component.css']
})
export class AsyncPrepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.AsyncWithCallback();
  }

  AsyncWithCallback() {
    console.log("na 3 seconden krijg je een resultaat terug");
    this.GetAsyncFunction(10, (data: any) => {
      console.log(data);
    });
  }

  GetAsyncFunction(getal: number, callback: any) {
    setTimeout(() => {
      getal *= 2;
      callback(getal);
    }, 3000);
  }



  // Callback hell



  levelOne(value: number, callback: any) {
    setTimeout(() => {
      let newScore = value + 5;
      callback(newScore);
    }, 5000);
  }

  levelTwo(value: number, callback: any) {
    setTimeout(() => {
      let newScore = value + 5;
      callback(newScore);
    }, 5000);
  }

  levelThree(value: number, callback: any) {
    setTimeout(() => {
      let newScore = value + 5;
      callback(newScore);
    }, 5000);
  }

}
