import { Component, OnInit } from '@angular/core';

import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.scss']
})
export class AppCartComponent implements OnInit {

  cartItems: any[];

  constructor(private appProductService: AppProductService) { }

  ngOnInit() {
    this.appProductService.cartItems$.subscribe(items => this.cartItems = items);
  }

  removeProductFromCart(id: number) {
    this.appProductService.removeProductFromCart(id);
  }

}
