import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import IItem from '../../models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  errorMessage!: string;
  items!: IItem[];
  isLoaded = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log("after res", data);
      this.items = data['items'];
      this.isLoaded = true;
    });
  }
}
