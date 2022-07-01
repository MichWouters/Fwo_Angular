import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  id: number = 0;

  constructor() { }

  note: Note = {
    id: '',
    title: '',
    note: ''
  };

  step = 1;

  isStepComplete(step: number): boolean | undefined {
    switch (step) {
      case 1:
        return !!this.note.title;
      case 2:
        return !!this.note.note;
      default:
        throw new Error();
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

  ngOnInit(): void {
  }

  submit(note: Note){
    this.id++;
    const noteWithId: Note = {
      ...note,
      id: this.id.toString()
    }

    //Send Post request to dispatcher
    eventDispatcher.next({type: ActionTypes.CREATE_NOTE, payload: noteWithId});

    this.resetState();
  }

}
