import { Injectable } from '@angular/core';
import { UserLoginService } from './user-login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart |null = null;
  userId : string | null = null;
  cartId : string | null = null;
  response :any | null = null;

  constructor(private userLoginService:UserLoginService,private router:Router, private http :HttpClient) {
    this.userLoginService.user$.subscribe(user => {
      this.userId = user;
      if(!this.userId){
      return;
    }
    this.http.get<any>('http://localhost:3000/cart?userId='+user,{observe:'response'}).subscribe((response) => {
      if(response.body ===null){
        return;
      }
      this.response = response;    
      this.cartId = response.body[0].id;            
           
      this.cart = {
        userId: String(this.userId),
        items: new Map<string, number>(Object.entries(response.body[0].items))       
      }
      console.log('cart',this.cart);
    })
      
    });
    
   }
  init(){
    console.log('constructed cartService')
  } 

  addToCart( productId: string) : void {
    if(!this.userId){
      console.error('Login to add to cart');
      this.router.navigate(['/userLogin']);
      return;
    }
    if(!this.cart){
      this.cart = {
        userId: this.userId,
        items:new Map<string, number>()        
      }
    }
    this.cart.items.set(productId, (this.cart.items.get(productId) || 0) + 1);
    const cartJson = {
      userId: this.userId,
      items: Object.fromEntries(this.cart.items)
    } 
    console.log('cartId',this.cartId);
    
    this.http.put<Cart>('http://localhost:3000/cart/'+this.cartId, cartJson).subscribe((response) => {
      if(this.cart && this.cart.items) {
    }
    }); 
    

    
  }
}
