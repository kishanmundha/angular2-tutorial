import { Routes } from '@angular/router';

import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
import { AppCartComponent } from './pages/app-cart/app-cart.component';

export const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'cart', component: AppCartComponent },
  { path: '**', component: AppNotFoundComponent }
];
