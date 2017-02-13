import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-app-buy2',
  templateUrl: './app-buy2.component.html',
  styleUrls: ['./app-buy2.component.css']
})
export class AppBuy2Component implements OnInit {

  userInfo: UserInfo = <UserInfo>{};

  form: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: '',
      address: ['', [Validators.required]],
      address2: '',
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]]
    });

    window['temp'] = this.form;
  }

  ngOnInit() {
  }

}
