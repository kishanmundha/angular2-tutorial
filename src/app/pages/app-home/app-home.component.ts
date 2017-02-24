import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';

import { AppProductService } from '../../shared/services/app-product.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  animations: [
    trigger('productCardIn', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [
      style({opacity: 0}),
      animate(1000)
    ]),
    transition('* => void', [
      animate(500, style({opacity: 0}))
    ])
  ])
  ]
})
export class AppHomeComponent implements OnInit {

  productsLoaded = false;
  products = [];
  sort = 'name';

  constructor(private appProductService: AppProductService, ) {
    /*for (let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Title' + (i + 1),
        description: 'Descript line',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 24 + (i % 2),
        displayPrice: (i % 2 === 0 ? 30 : 24)
      });
    }*/
  }

  ngOnInit() {
    this.appProductService.getProducts().then(products => { this.products = products; this.productsLoaded = true; });
  }

}
