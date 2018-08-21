import { Injectable } from '@angular/core';
import { Item } from './item';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  items: Item[] = [
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"},
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"},
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"},
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"},
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"},
    {id: 1, title: "coisa", description: "zebra", price: 12313, image: "assets/cama-frente-thumb.jpg"}
  ];

  all(): Observable<Item[]> {
    return of(this.items);
  }

  constructor() { }
}
