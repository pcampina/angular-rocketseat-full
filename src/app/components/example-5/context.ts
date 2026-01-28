import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Context {
  private itemsSubject = new BehaviorSubject<any[]>([]);

  items$ = this.itemsSubject.asObservable().pipe(
    map((items) => structuredClone(items))
  );

  addItem(item: { name: string, price: number }) {
    const currentList = this.itemsSubject.value;

    this.itemsSubject.next([...currentList, item]);
  }
}
