import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './app-product-card.component.html',
  styleUrls: ['./app-product-card.component.scss']
})
export class AppProductCardComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
