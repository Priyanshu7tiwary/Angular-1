import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../data-type';
import { ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-seller-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './seller-product-detail.component.html',
  styleUrl: './seller-product-detail.component.css'
})
export class SellerProductDetailComponent {
  product:undefined | Product; 
  popupMessage = '';
  showPopup = false; 
  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router){}
  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      const id = param.get('id');
      if(id === null) return;
      this.productService.getProduct(id).subscribe((result)=>{
        this.product = result;
      })      
    })
  }

  sellerDelete(id:string){
    this.productService.deleteProduct(id).subscribe((result)=>{
      console.warn(result);
      if(result) this.showPopupMessage('Product deleted successfully');
      this.router.navigate(['sellerMyproduct']);

    })
  }
  showPopupMessage(message: string, duration = 3000) {
  this.popupMessage = message;
  this.showPopup = true;

  setTimeout(() => {
    this.showPopup = false;
  }, duration);
}

 


}
