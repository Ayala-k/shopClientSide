import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import ICartItem from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems!: ICartItem[];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("cart init");

    this.cartService.getCart().subscribe(
      (response: any) => {
        this.cartItems = response;
        this.calculateTotalPrice()

      },
      error => {
        console.log(error.error);
      }
    );
  }

  calculateTotalPrice() {
    let sum = 0;
    this.cartItems.forEach(item => {
      sum += item.amount * item.price;
    })
    this.totalPrice = sum
  }

  createOrder(){
    this.cartService.createOrder().subscribe(
      (response: any) => {
        console.log(response);
      },
      error => {
        console.log(error.error);
      }
    );
  }
}
