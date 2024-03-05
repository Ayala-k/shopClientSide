import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import ICartItem from '../../models/cartItem';
import { Subscription } from 'rxjs';
import { MainService } from '../../services/main.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  //styleUrl: "node_modules/ngx-toastr/toastr.css", 
  //styles
})

export class CartComponent implements OnInit {
  cartItems!: ICartItem[];
  totalPrice: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService, private mainService: MainService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
    this.cartSubscription = this.mainService.cartUpdated$.subscribe(() => {
      this.getCart();
    });
  }


  getCart() {
    this.cartService.getCart().subscribe(
      (response: any) => {
        this.cartItems = response.items;
        this.totalPrice = response.totalPrice;
      },
      error => {
        console.log(error.error);
        if (error.status == 404) {
          this.cartItems = []
          this.totalPrice = 0;
        }
      }
    );
  }

  createOrder() {
    this.cartService.createOrder().subscribe(
      (response: any) => {
        console.log(response);
        this.mainService.updateCart();
        this.toastr.success('We will contact you to receive the shipment', 'Thanks for your order!');

      },
      error => {
        console.log(error.error,"toast");
        this.toastr.error('Error while creating order, please try again', 'Error');

      } 
    );
  }

}
