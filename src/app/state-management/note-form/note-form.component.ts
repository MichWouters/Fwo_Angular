import { Component, OnInit } from '@angular/core';
import { Note } from '../note-card/note-card.component';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

@Component({
  selector: 'subject-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  constructor() {
  }

  note: Note = {
    id: '',
    title: '',
    note: ''
  };

  step = 1;

  isStepComplete(step: number): boolean {
    switch (step) {
      case 1:
        return !!this.note.title;
      case 2:
        return !!this.note.note;
      default:
        throw Error();
    }
  }

  completeStep() {
    if (this.step === 1) {
      const stepComplete = this.isStepComplete(this.step);
      if (stepComplete) {
        this.step += 1;
        return;
      }
    }

    const formComplete = this.isStepComplete(this.step);
    if (formComplete) {
      this.submit(this.note);
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step -= 1;
    }
  }

  resetState() {
    this.note = {
      id: '',
      title: '',
      note: ''
    };
    this.step = 1;
  }

  submit(note: Note) {
    const noteWithId: Note = {
      ...note,
      id: "1",
    };
    eventDispatcher.next({ type: ActionTypes.CREATE_NOTE, payload: noteWithId });
    this.resetState();
  }

  ngOnInit() {
  }

}
