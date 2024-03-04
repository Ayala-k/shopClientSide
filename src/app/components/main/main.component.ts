import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  errorMessage!: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(
      (response: any) => {
        // Save token to browser cookies
        //const token = response.token;

        console.log(response);
      },
      error => {
        // Handle login error and display error message
        console.log(error);

        this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    ); 
  }
}
