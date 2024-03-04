import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import IItem from '../../models/item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  errorMessage!: string;
  items!:IItem[];
  isLoaded=false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(
      (response: any) => {
        this.items=response;
        this.isLoaded=true;
      },
      error => {
        this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    ); 
  }
}
