import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsList } from '../products-list/products-list';
import { ProductsCount } from '../products-count/products-count';

@Component({
  selector: 'app-products',
  imports: [ProductsList, ProductsCount],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  readonly _productsService = inject(ProductsService);

  addProduct() {
    this._productsService.addProduct(3, 'Microphone', 300)
  }

  removeProduct() {
    this._productsService.removeProduct(1)
  }

  resetProducts() {
    this._productsService.products = []
  }
}
