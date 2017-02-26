import { Component, OnInit, trigger, animate, transition, style } from '@angular/core';

import { Product } from '../../shared/interfaces';

import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
  animations: [
    trigger('dataLoaded', [
      transition('void => *', [
        style({ 'margin-top': '50px', opacity: 0 }),
        animate(500, style({ 'margin-top': '0px', opacity: 0.5 })),
        animate(500, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class AppHomeComponent implements OnInit {

  products: Product[] = [];

  sort = 'name';
  search = '';

  dataLoaded = false;

  constructor(private appProductService: AppProductService) { }

  ngOnInit() {
    this.appProductService.getProducts().then(products => { this.products = products; this.dataLoaded = true; });
  }

}
