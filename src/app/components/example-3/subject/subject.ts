import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class SubjectComponent implements OnInit {
  mySubject$ = new Subject<string>();

  ngOnInit() {
    this.mySubject$.next('❌ This subject message WILL NOT notify');

    this.firstSubscription();

    setTimeout(() => {
      this.mySubject$.next('✅ This subject message WILL notify')
    }, 6000);
  }

  firstSubscription() {
    this.mySubject$.subscribe((value) => {
      console.log('First subscription: ', value);
    })
  }

  secondSubscription() {
    this.mySubject$.subscribe((value) => {
      console.log('Second subscription: ', value);
    })
  }
}
