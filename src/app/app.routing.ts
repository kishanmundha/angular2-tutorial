// import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppBuyComponent } from './pages/app-buy/app-buy.component';

export const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'buy', component: AppBuyComponent },
//  { path: 'buy2', component: AppBuy2Component },
  { path: 'feedback', loadChildren: './modules/feedback/feedback.module#FeedbackModule'}
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

