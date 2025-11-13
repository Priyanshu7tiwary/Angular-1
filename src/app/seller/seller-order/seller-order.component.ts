import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Order } from '../../data-type';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-seller-order',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './seller-order.component.html',
  styleUrl: './seller-order.component.css'
})
export class SellerOrderComponent {
  orders : Order[] = [];

}
