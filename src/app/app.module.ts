import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { AppProductService, AppFirebaseHttpService, AppFirebaseService, firebaseConfig } from './shared/services';

import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppCheckoutComponent } from './pages/app-checkout/app-checkout.component';

import { FilterPipe, OrderByPipe } from './shared/pipes';

import { routes } from './app.routing';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
import { AppProductCardComponent } from './shared/components/app-product-card/app-product-card.component';
import { AppCartComponent } from './pages/app-cart/app-cart.component';
import { AppCheckoutSuccessComponent } from './pages/app-checkout-success/app-checkout-success.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppCheckoutComponent,
    FilterPipe,
    OrderByPipe,
    AppNotFoundComponent,
    AppProductCardComponent,
    AppCartComponent,
    AppCheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 })
  ],
  // providers: [AppFirebaseService, {provide: Http, useClass: AppFirebaseHttpService, deps: [XHRBackend, RequestOptions]}],
  providers: [AppFirebaseService, AppProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
