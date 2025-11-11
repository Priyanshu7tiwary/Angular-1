import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {

  constructor(private productService:ProductService){}
  showPopup = false;
popupMessage = '';

showPopupMessage(message: string, duration = 3000) {
  this.popupMessage = message;
  this.showPopup = true;

  setTimeout(() => {
    this.showPopup = false;
  }, duration);
}

  addProduct(form: any) {
    this.productService.postProduct(form.value).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.showPopupMessage('Product added successfully');
        form.reset();
      }
    });   
  }

}
