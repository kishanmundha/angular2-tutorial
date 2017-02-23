import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { Http } from '@angular/http';

import { AppFirebaseService } from './shared/app-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cartIn', [
    state('in', style({ opacity: 1, 'padding-right': '0px' })),
    transition('void => *', [
      style({opacity: 0, 'padding-right': '20px'}),
      animate(200)
    ]),
    transition('* => void', [
      animate(200, style({opacity: 0, 'padding-right': '20px'}))
    ])
  ])
  ]
})
export class AppComponent {
  title = 'app works!';
  cartItemCount = 0;


  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(firebase: AppFirebaseService, http: Http) {
    // firebase.test();

    //http.get('https://api.github.com/repos/kishanmundha/DocProject/releases/latest')
    //  .map(res => res.json())
    //  .subscribe(res => console.log(res));

    /** test x */
    const x: number = 10;

    //setTimeout(function() {
      this.cartItemCount = 4;
    //}, 500);
  }
}
