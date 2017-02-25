import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  products: Product[] = [{
    name: 'Burger',
    price: 33
  }, {
    name: 'French Fries',
    price: 66
  }, {
    name: 'Pizza',
    price: 90
  }, {
    name: 'Dahi Vada',
    price: 40
  }, {
    name: 'Sandwich',
    price: 20
  }];

  constructor() { }

  ngOnInit() {
  }

}
