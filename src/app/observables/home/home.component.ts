import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
import { CustomObservables } from './customObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  //private firstSubscriber!: Subscription;
  private secondSubscriber!: Subscription;
  private customObservable = new CustomObservables().customIntervalObservable;
  constructor() { }


  ngOnInit(): void {
    // this.firstSubscriber = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    this.secondSubscriber = this.customObservable
    .pipe(map(
      (response) => {
        return 'Round: ' + response;
      }
    ))
    .subscribe({
      next: (data) => console.log(data),
      error: (error) => {
        console.log(error);
        alert(error.message);
      },
      complete: () => console.log('Expensive operation completed')
    });
  }

  // Called when component is unloaded
  ngOnDestroy(): void {
    // this.firstSubscriber.unsubscribe();
    this.secondSubscriber.unsubscribe();
  }
}
