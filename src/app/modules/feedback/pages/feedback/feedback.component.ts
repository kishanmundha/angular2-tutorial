import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../../shared/interfaces';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userInfo: UserInfo = <UserInfo>{ fullName: 'test', mobile: '334345453453', email: 'ki@fd' };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sendFeedback() {
    this.router.navigate(['./success'], { relativeTo: this.route });
  }

}
