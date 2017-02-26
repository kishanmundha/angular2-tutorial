import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss']
})
export class AppLoadingComponent {

  visibility = 'hidden';

  constructor() { }

  show() {
    this.visibility = 'visible';
  }

  hide() {
    this.visibility = 'hidden';
  }

}
