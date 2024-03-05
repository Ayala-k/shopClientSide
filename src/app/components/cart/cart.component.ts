import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import ICartItem from '../../models/cartItem';
import { Subscription } from 'rxjs';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems!: ICartItem[];
  totalPrice: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService,private mainService:MainService) { }

  ngOnInit(): void {
    console.log("cart init");
    this.getCart();
    this.cartSubscription = this.mainService.cartUpdated$.subscribe(() => {
      console.log("cart update event");
      this.getCart();
      
    });
  }


  getCart(){
    this.cartService.getCart().subscribe(
      (response: any) => {
        this.cartItems = response.items;
        this.totalPrice=response.totalPrice;
      },
      error => {
        console.log(error.error);
        if(error.status==404){
          this.cartItems=[]
          this.totalPrice=0;
        }
      }
    );
  }

  createOrder(){
    this.cartService.createOrder().subscribe(
      (response: any) => {
        console.log(response);
        this.mainService.updateCart();
      },
      error => {
        console.log(error.error);
      }
    );
  }
}
