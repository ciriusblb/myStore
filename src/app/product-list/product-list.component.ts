import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  products: any[] = products;
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('this product is shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes in sale');
  }

}
