import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoCheckout } from '../../shared/interfaces';
import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-app-checkout',
  templateUrl: './app-checkout.component.html',
  styleUrls: ['./app-checkout.component.css']
})
export class AppCheckoutComponent implements OnInit {

  userInfo: UserInfoCheckout = <UserInfoCheckout>{};

  constructor(private router: Router, private appProductService: AppProductService) { }

  ngOnInit() {
  }

  checkout() {
    this.appProductService.clearCart();
    this.router.navigate(['/checkout/success']);
  }
}
