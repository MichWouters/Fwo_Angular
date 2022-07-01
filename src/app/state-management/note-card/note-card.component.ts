import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';

declare const feather: any;

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;
  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

  deleteNote(id: string){
    let shouldDelete = confirm('Are you sure you want to delete this?')

    if (shouldDelete) {
      // TODO: Send request to Dispatcher to demand a delete.
    }
  }
}
