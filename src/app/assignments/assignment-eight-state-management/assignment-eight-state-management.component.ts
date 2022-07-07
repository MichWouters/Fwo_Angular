import { Component, OnInit } from '@angular/core';
import { Boat } from './boat';
import { BoatActionTypes } from './store/boat-actionTypes';
import { boatEventDispatcher, boatStore } from './store/boat-index';

@Component({
  selector: 'app-assignment-eight-state-management',
  templateUrl: './assignment-eight-state-management.component.html',
  styleUrls: ['./assignment-eight-state-management.component.scss']
})
export class AssignmentEightStateManagementComponent implements OnInit {

  boats: Boat[] = [];

  constructor() {
    boatStore.subscribe((state) => {
      const { boats } = state;
      this.boats = boats;
    });
  }

  ngOnInit(): void {
    boatEventDispatcher.next({ type: BoatActionTypes.GET_ALL_BOATS });
  }

}
