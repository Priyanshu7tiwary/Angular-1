import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { Product } from '../../data-type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-seller-myproduct',
  standalone: true,
  imports: [RouterModule, NgForOf],
  templateUrl: './seller-myproduct.component.html',
  styleUrl: './seller-myproduct.component.css'
})
export class SellerMyproductComponent {

  constructor(private productService:ProductService){}

  products : Product[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => this.products = data);    
  }

}
