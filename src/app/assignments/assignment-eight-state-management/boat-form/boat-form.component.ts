import { Component, OnInit } from '@angular/core';
import { Boat } from '../boat';
import { BoatActionTypes } from '../store/boat-actionTypes';
import { boatEventDispatcher } from '../store/boat-index';
import { BoatTypes } from '../store/boat-types';

@Component({
  selector: 'app-boat-form',
  templateUrl: './boat-form.component.html',
  styleUrls: ['./boat-form.component.scss']
})
export class BoatFormComponent implements OnInit {
  id: number = 0;
  boatEnum = BoatTypes;
  
  constructor() { }

  boat: Boat = {
    id: 0,
    name: 'foo',
    type: BoatTypes.ROWBOAT,
    isAvailable: true,
  };

  ngOnInit(): void {
  }

  submit() {
    this.id++;

    const boatWithId: Boat = {
      ...this.boat, id: 
      this.id
    };

    //Send Post request to dispatcher
    boatEventDispatcher.next({ type: BoatActionTypes.CREATE_BOAT, payload: boatWithId });

    this.resetState();
  }

    resetState() {
      this.boat = {
        id: 0,
        name: '',
        type: BoatTypes.ROWBOAT,
        isAvailable: true,
      };
  }
}
