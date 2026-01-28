import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.html',
  styleUrl: './behavior-subject.css',
})
export class BehaviorSubjectComponent implements OnInit {
  myBehaviorSubject$ = new BehaviorSubject<string>('First value');

  ngOnInit(): void {
    this.firstSubscription();
  }

  firstSubscription() {
    this.myBehaviorSubject$.subscribe((value) => {
      console.log('First Subscription:', value);
    })
  }

  emitValue() {
    this.myBehaviorSubject$.next("Second value - emited from button")
  }

  laterEmit() {
    this.myBehaviorSubject$.subscribe((value) => {
      console.log('Later Subscription:', value);
    })
  }
}
