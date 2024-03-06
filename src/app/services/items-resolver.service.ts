import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ItemsService } from './items.service';
import { Observable } from 'rxjs';
import IItem from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService implements Resolve<any>{

  constructor(private itemsService:ItemsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItem[]> | Promise<IItem[]> | IItem[] {
    return this.itemsService.getItems();
  }
}
