import { Component, OnInit } from '@angular/core';
import { Holiday } from './holiday.model';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  public showSecret: boolean = false;
  logs: string[] = [];
  holidays: Holiday[] = [];

  constructor() {
    this.generateHolidays();

    setInterval(() => {
      this.generateHolidays();
    }, 5000);
  }

  generateHolidays(): void {
  this.holidays = [
      this.generateHoliday('Milan'),
      this.generateHoliday('Paris'),
      this.generateHoliday('Brussels'),
      this.generateHoliday('Amsterdam'),
      this.generateHoliday('Milan'),
    ]
  }

  generateHoliday(name: string): Holiday {
    return new Holiday(
      name, Math.floor(Math.random() * 25) + 0)
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push('Hello');
  }

  ngOnInit(): void {
  }

}
