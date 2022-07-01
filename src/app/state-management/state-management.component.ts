import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss']
})
export class StateManagementComponent implements OnInit {

  notes: Note[] = [];

  constructor() { 
    //TODO: Subscribe on Dispatcher
  }


  ngOnInit(): void {
    // TODO: Fetch data on init
  }

}
