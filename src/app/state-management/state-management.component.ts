import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss']
})
export class StateManagementComponent implements OnInit {

  notes: Note[] = [];

  constructor() {
    store.subscribe((state) => {
      const { notes } = state;
      this.notes = notes;
    });
  }


  ngOnInit(): void {
    eventDispatcher.next({ type: ActionTypes.GET_NOTES });
  }

}
