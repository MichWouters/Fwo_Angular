import { Component, OnInit } from '@angular/core';
import { Note } from '../note-card/note-card.component';
import { store, eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

@Component({
  selector: 'app-state-management-main',
  templateUrl: './state-management-main.component.html',
  styleUrls: ['./state-management-main.component.css']
})
export class StateManagementMainComponent implements OnInit {
  constructor() {
    store.subscribe((state) => {
      const { notes } = state;
      this.notes = notes;
    });
  }

  notes: Note[] = [];

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_NOTES });
  }
}
