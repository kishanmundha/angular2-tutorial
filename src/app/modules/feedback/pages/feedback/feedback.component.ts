import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserInfoFeedback } from '../../shared/interfaces';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @ViewChild(NgForm) feedbackForm: NgForm;

  userInfo: UserInfoFeedback = <UserInfoFeedback>{};

  formSubmitBtnTouched = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sendFeedback() {
    this.formSubmitBtnTouched = true;
    if (this.feedbackForm.invalid) {
      return;
    }

    this.router.navigate(['./success'], { relativeTo: this.route });
  }
}
