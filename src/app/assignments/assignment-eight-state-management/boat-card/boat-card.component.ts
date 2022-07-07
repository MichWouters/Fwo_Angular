import { Component, Input, OnInit } from '@angular/core';
import { Boat } from '../boat';
import { BoatActionTypes } from '../store/boat-actionTypes';
import { boatEventDispatcher } from '../store/boat-index';

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.scss']
})
export class BoatCardComponent implements OnInit {
  @Input() boat: Boat;

  constructor() { }

  ngOnInit(): void {
  }

  deleteBoat(id: number) {
    let shouldDelete = confirm('Are you sure you want to delete this boat?')

    if (shouldDelete) {
      boatEventDispatcher.next({ type: BoatActionTypes.DELETE_BOAT, payload: id })
    }
  }

  rentBoat(id: number) {
    let shouldRent = confirm('Are you sure you want to rent this boat?')

    if (shouldRent) {
      boatEventDispatcher.next({ type: BoatActionTypes.RENT_BOATS, payload: id })
    }
  }
}
