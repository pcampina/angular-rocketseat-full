import { Component, signal } from '@angular/core';
import { Products } from './example-1/components/products/products';

@Component({
  selector: 'app-root',
  imports: [Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('services-state-management');
}
