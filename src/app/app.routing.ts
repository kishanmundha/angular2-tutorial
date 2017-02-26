import { Routes } from '@angular/router';

import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
import { AppCartComponent } from './pages/app-cart/app-cart.component';
import { AppCheckoutComponent } from './pages/app-checkout/app-checkout.component';
import { AppCheckoutSuccessComponent } from './pages/app-checkout-success/app-checkout-success.component';

export const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'cart', component: AppCartComponent },
  { path: 'checkout', component: AppCheckoutComponent },
  { path: 'checkout/success', component: AppCheckoutSuccessComponent },
  { path: 'feedback', loadChildren: './modules/feedback/feedback.module#FeedbackModule'},
  { path: '**', component: AppNotFoundComponent }
];
