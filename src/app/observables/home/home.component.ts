import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { CustomObervables } from './customObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // private firstSubscriber!: Subscription;
  private secondSubscriber!: Subscription;
  private customObservable = new CustomObervables().customIntervalObservable;

  constructor() { }

  ngOnInit(): void {
    //Subscribe on event every second
    // this.firstSubscriber = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    this.secondSubscriber = this.customObservable.pipe(
      map((val) => { return 'Round: ' + (val as number + 1) })
    )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => { console.log(error), alert(error.message) },
        complete: () => console.info('Completed!')
      });
  }

  // Called when component is unloaded
  ngOnDestroy(): void {
    // this.firstSubscriber.unsubscribe();
    this.secondSubscriber.unsubscribe();
  }
}