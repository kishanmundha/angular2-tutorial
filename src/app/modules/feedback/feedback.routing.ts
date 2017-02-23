import { Routes } from '@angular/router';

import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackSuccessComponent } from './pages/feedback-success/feedback-success.component';

export const routes: Routes = [
  { path: '', component: FeedbackComponent },
  { path: 'success', component: FeedbackSuccessComponent}
];

