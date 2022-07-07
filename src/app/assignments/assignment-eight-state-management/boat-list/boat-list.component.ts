import { Component, Input, OnInit } from '@angular/core';
import { Boat } from '../boat';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.scss']
})
export class BoatListComponent implements OnInit {
  @Input() boats: Array<Boat>;
  constructor() { }

  ngOnInit(): void {
  }

}
