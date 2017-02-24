import { Component, OnInit } from '@angular/core';

import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.css']
})
export class AppCartComponent implements OnInit {

  cartItems: any[];

  constructor(private appProductService: AppProductService) {
    this.appProductService.cartItems$.subscribe(items => this.cartItems = items);
  }

  ngOnInit() {
  }

  removeProductFromCart(id: number) {
    this.appProductService.removeProductFromCart(id);
  }

}
