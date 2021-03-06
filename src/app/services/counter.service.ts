import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive counter button clicked: ' + this.activeToInactiveCounter);
  }

  incrementToActive() {
    this.inactiveToActiveCounter++;
    console.log('Active to active counter button clicked: ' + this.inactiveToActiveCounter);
  }

  constructor() { }
}
