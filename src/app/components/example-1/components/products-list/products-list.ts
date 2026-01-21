import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  readonly _productsService = inject(ProductsService);
}
