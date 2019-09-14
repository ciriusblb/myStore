import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private _cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this._cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this._cartService.clearCart();
    this.checkoutForm.reset();
  }

}
