import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  myObservable = new Observable((observer) => {
    setInterval(() => {
      observer.next('dog');
      observer.next('cat');
      observer.next('bird');
      observer.complete();
    }, 2000);
  });

  mySecondObservable: Observable<string>;
  mySecondPromise: Promise<string>;

  myPromise = new Promise(resolve => {
    setInterval(() => {
      resolve('dog');
      resolve('cat');
      resolve('bird');
    }, 2000);

  });

  constructor() { }

  ngOnInit(): void {
    // this.myObservable.subscribe({
    //   next: (data) => console.log('Observable: ' + data),
    //   error:(error) => console.log(error),
    //   complete: () => console.log('Operation complete'),
    // });

    // this.myPromise.then(result => {
    //   console.log('promise: ' + result);
    // });
  }

  create(): void {
   this.mySecondObservable = new Observable<string>(observer => {
      console.log('Observer was created');
      setInterval(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
        observer.complete();
      }, 2000);

    });

    this.mySecondPromise = new Promise<string>(resolve => {
      console.log('Promise was created');
      setTimeout(() => {
        resolve('Promise is emitting data');
        resolve('Promise is emitting secondary data');
      }, 2000);
    });
  }

  execute(): void {
    this.mySecondObservable
    .subscribe({
      next: (data) => console.log(data),
      complete: () => console.log('no more data!'),
    });

    this.mySecondPromise.then(data => {
      console.log(data);
    })
  }

  cancel(): void {

  }

}
