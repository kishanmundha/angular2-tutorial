import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  items = [];
  sort = 'title';

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Title' + (i + 1),
        description: 'Descript line',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 24 + (i % 2),
        displayPrice: (i % 2 === 0 ? 30 : 24)
      });
    }
  }

  ngOnInit() {
  }

}
