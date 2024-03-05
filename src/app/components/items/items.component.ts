import { Component, Input, OnInit } from '@angular/core';
import IItem from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent{
  @Input() items: IItem[]=[];
}
