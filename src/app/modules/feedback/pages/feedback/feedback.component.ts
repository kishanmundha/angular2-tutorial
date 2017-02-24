import { Component, OnInit } from '@angular/core';
import { UserInfoFeedback } from '../../../../shared/interfaces';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userInfo: UserInfoFeedback = <UserInfoFeedback>{ };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sendFeedback() {
    this.router.navigate(['./success'], { relativeTo: this.route });
  }

}
