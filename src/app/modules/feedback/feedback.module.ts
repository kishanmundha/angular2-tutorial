import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

// Child routes
import { routes } from './feedback.routing';

import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackSuccessComponent } from './pages/feedback-success/feedback-success.component';

@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule { }
