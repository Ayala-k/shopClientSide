import { Component, Input } from '@angular/core';
import IItem from '../../models/item';
import { CartService } from '../../services/cart.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: IItem;
  errorMessage!: string;

  constructor(private cartService: CartService, private mainService:MainService) { }

  addToCart(itemId: number) {
    this.cartService.addToCart(itemId).subscribe(
      (response: any) => {
        this.mainService.updateCart();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    );
  }
}
