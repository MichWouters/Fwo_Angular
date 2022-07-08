import { Component, Input, OnInit } from '@angular/core';
import { Boat } from '../boat';
import { BoatActionTypes } from '../store/boat-actionTypes';
import { boatEventDispatcher } from '../store/boat-index';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.scss']
})
export class BoatListComponent implements OnInit {
  @Input() boats: Array<Boat>;
  toggleAvailableClicks: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAvailableAllBoats() {
    // TODO - Fix bug. All boats not loading.
    this.toggleAvailableClicks++;

    if (this.toggleAvailableClicks % 2 === 0) {
      boatEventDispatcher.next({ type: BoatActionTypes.GET_ALL_BOATS });
    }
    else {
      boatEventDispatcher.next({ type: BoatActionTypes.GET_AVAILABLE_BOATS });
    }
  }

}
