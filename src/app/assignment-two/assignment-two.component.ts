import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  public userName: string = '';
  constructor() { }

  resetUser() {
    alert('Hello ' + this.userName);
    this.userName = '';
  }

  isUserNameEmpty(): boolean {
    return this.userName === '';
  }

  ngOnInit(): void {
  }

}
