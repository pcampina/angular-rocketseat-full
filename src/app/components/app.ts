import { Component, signal } from '@angular/core';
import { Products } from './example-1/components/products/products';
import { Observables } from "./example-2/observables/observables";
import { SubjectComponent } from './example-3/subject/subject';
import { BehaviorSubjectComponent } from "./example-4/behavior-subject/behavior-subject";
import { BehaviorContext } from "./example-5/behavior-context/behavior-context";

@Component({
  selector: 'app-root',
  imports: [Products, Observables, SubjectComponent, BehaviorSubjectComponent, BehaviorContext],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('services-state-management');
}
