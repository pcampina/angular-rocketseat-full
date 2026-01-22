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
  productsList: any[] = []
  readonly _productsService = inject(ProductsService);

  ngOnInit() {
    this._productsService.products$.subscribe((productsList) => {
      console.log('ProductsComponent productsList', productsList);

      this.productsList = productsList
    })
  }

  addProduct() {
    this._productsService.addProduct(3, 'Microphone', 300)
  }

  removeProduct() {
    this._productsService.removeProduct(1)
  }

  resetProducts() {
    this.productsList = []
  }
}
