import { Component, inject, OnInit } from '@angular/core';
import { Context } from '../context';

@Component({
  selector: 'app-behavior-context',
  imports: [],
  templateUrl: './behavior-context.html',
  styleUrl: './behavior-context.css',
})
export class BehaviorContext implements OnInit {
  private readonly _contextService = inject(Context)

  ngOnInit(): void {
    this._contextService.items$.subscribe((value) => {
      console.log('Value: ', value)
    });

    this._contextService.addItem({ name: 'Keyboard', price: 100 })
  }
}
