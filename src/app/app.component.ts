import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { AppFirebaseService } from './shared/app-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


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

    http.get('https://api.github.com/repos/kishanmundha/DocProject/releases/latest')
      .map(res => res.json())
      .subscribe(res => console.log(res));

    /** test x */
    const x: number = 10;
  }
}
