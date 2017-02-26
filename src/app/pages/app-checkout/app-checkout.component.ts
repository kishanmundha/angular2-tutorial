import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserInfoCheckout } from '../../shared/interfaces';

import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './app-checkout.component.html',
  styleUrls: ['./app-checkout.component.scss']
})
export class AppCheckoutComponent implements OnInit {

  @ViewChild(NgForm) checkoutForm: NgForm;

  userInfo: UserInfoCheckout = <UserInfoCheckout>{};

  formSubmitBtnTouched = false;

  constructor(private router: Router, private appProductService: AppProductService) { }

  ngOnInit() {
  }

  checkout() {
    this.formSubmitBtnTouched = true;
    if (this.checkoutForm.invalid) {
      return;
    }

    this.appProductService.clearCart();
    this.router.navigate(['/checkout/success']);
  }
}
