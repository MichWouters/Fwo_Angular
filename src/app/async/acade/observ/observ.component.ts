import { Component, OnInit } from '@angular/core';
import { mergeMap, observable, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string) {
    this.text = text;
  }

  checkAuth(): Observable<boolean> {
    this.setText('Checking Auth...');
    return new Observable(observer => {
      setTimeout(() => {
        observer.next();
      }, 2000);
    })
  }

  fetchUser(): any {
    this.setText('Fetching user...');
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ name: 'Max' });
      }, 2000);
    });
  }

  // TODO:
  runObservable(){
    this.checkAuth().subscribe({
      next: (data) => {
        if(data){
          return this.fetchUser().subscribe({
            next: (data: any) => {
              this.setText(data);
            }
          });
        }
      }
    })
  };
}
