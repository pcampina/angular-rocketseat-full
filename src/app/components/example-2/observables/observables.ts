import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [AsyncPipe],
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables implements OnInit, OnDestroy {
  myObservable$!: Observable<number>
  mySubscriptions!: Subscription;
  observableList$!: Observable<string[]>

  ngOnInit(): void {
    this.createObservable();
    // this.subscribeOne();
    this.createObservableList();
    // this.subscriptionUpperCaseList();
    this.subscriptionOddNumbers();
  }

  ngOnDestroy() {
    this.mySubscriptions?.unsubscribe();
  }

  createObservable() {
    this.myObservable$ = new Observable<number>((subscriber) => {
      subscriber.next(1),
      subscriber.next(2),
      subscriber.next(3)

      setTimeout(() => {
        subscriber.next(4)
      }, 1000)
    })
  }

  subscribeOne() {
    this.mySubscriptions = this.myObservable$.subscribe((subscriberValue) => {
      console.log(subscriberValue);
    })
  }

  createObservableList() {
    this.observableList$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['John', 'Joane', 'Tim', 'Madison'])
      }, 2000)
    })
  }

  subscriptionUpperCaseList() {
    this.observableList$
      .pipe(
        map(list => list.map((name) => name.toUpperCase()))
      )
      .subscribe((list) => {
        console.log('UppercaseList', list)
      })
  }

  subscriptionOddNumbers() {
    this.myObservable$
      .pipe(
        tap(number => console.log('Received number:', number)),
        filter(number => number % 2 !== 0)
      )
      .subscribe(oddNumbers => console.log(oddNumbers))
  }
}
