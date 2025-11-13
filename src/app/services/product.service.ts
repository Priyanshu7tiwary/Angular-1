import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private generateRandomId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getProduct(id:string): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/'+id);
  }
  postProduct(data:Product): Observable<Product>{
    data.id = this.generateRandomId();
    return this.http.post<Product>('http://localhost:3000/products',data);
  }
  deleteProduct(id:string): Observable<Product[]>{
    return this.http.delete<Product[]>('http://localhost:3000/products/'+id);
  }
}
