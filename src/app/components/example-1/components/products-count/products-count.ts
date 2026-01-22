import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-count',
  imports: [AsyncPipe],
  templateUrl: './products-count.html',
  styleUrl: './products-count.css',
})
export class ProductsCount {
  readonly _productsService = inject(ProductsService);
}
