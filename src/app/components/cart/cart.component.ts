import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import ICartItem from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
  cartItems!:ICartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("cart init");
    
    this.cartService.getCart().subscribe(
      (response: any) => {
        //console.log(response);
        this.cartItems=response.items;
        console.log(this.cartItems);
        console.log("det",this.cartItems[0].itemDetails);
      },
      error => {
        console.log(error.error);
        
        //this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    ); 
  }

}
