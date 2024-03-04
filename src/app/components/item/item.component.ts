import { Component, Input } from '@angular/core';
import IItem from '../../models/item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: IItem;
  errorMessage!: string;


  constructor(private cartService: CartService) { }

  addToCart(itemId: number) {
    console.log("adding",itemId);
    this.cartService.addToCart(itemId).subscribe(
      (response: any) => {
        console.log("after req");
      },
      error => {
        console.log("errorrrrr",error);
        
        this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    ); 
  }
}
