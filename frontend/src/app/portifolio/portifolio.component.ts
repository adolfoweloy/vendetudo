import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {
  items: Item[];

  constructor(private productsService: ProductsService) { }

  private getProducts(): Observable<Item[]> {
    return this.productsService.all();
  }

  ngOnInit() {
    console.log("t=uea");
    this.getProducts().subscribe(products => {
      console.log(products);
      this.items = products;
    });
  }

}
