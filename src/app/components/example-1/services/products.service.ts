import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Mouse',
      price: 100
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 150
    }
  ]

  addProduct(id: number, name: string, price: number) {
    this.products.push({
      id,
      name,
      price
    })
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id)
  }
}
