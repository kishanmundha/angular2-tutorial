import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [{
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
}
