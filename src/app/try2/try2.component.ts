import { Component } from '@angular/core';
import { TryService } from './try.service';

@Component({
  selector: 'try2',
  templateUrl: './try2.component.html',
  styleUrl: './try2.component.css'
})
export class Try2Component {
  title="title4";
  array;
  constructor(service1:TryService){
    //let service=new TryService()
    this.array=service1.getArray()
  }
}
