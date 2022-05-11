import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  warningMessage = 'This is a warning. You are in danger!';

  constructor() { }

  ngOnInit(): void {
  }

}
