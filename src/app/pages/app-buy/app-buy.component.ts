import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../shared/interfaces';

@Component({
  selector: 'app-app-buy',
  templateUrl: './app-buy.component.html',
  styleUrls: ['./app-buy.component.css']
})
export class AppBuyComponent implements OnInit {

  userInfo: UserInfo = <UserInfo>{};

  constructor() { }

  ngOnInit() {
  }

}
