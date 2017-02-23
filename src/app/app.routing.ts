import { Routes } from '@angular/router';

import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppBuyComponent } from './pages/app-buy/app-buy.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';

export const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'buy', component: AppBuyComponent },
  { path: 'feedback', loadChildren: './modules/feedback/feedback.module#FeedbackModule'},
  { path: '**', component: AppNotFoundComponent }
];
