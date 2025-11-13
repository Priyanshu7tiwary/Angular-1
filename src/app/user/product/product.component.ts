import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../data-type';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private productService:ProductService, private cartService:CartService){}

  products : Product[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => this.products = data);    
    this.cartService.init();
  }
  addToCart(productId:string){
    if(!productId) return;
    this.cartService.addToCart(productId);
    console.log('added to cart');
  }


}
