import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { Http } from '@angular/http';

import { AppProductService } from './shared/services/app-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cartIn', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [
      style({opacity: 0}),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({opacity: 0}))
    ])
  ])
  ]
})
export class AppComponent {
  cartItemCount: number;

  constructor(appProductService: AppProductService) {
    appProductService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }
}
