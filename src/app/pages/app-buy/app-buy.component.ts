import { Component, OnInit } from '@angular/core';

interface UserInfo {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
}

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
