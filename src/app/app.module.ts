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

import { AppFirebaseService, firebaseConfig } from './shared/app-firebase.service';
import { AppProductService } from './shared/services/app-product.service';

import { AppFirebaseHttpService } from './shared/app-firebase-http.service';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppBuyComponent } from './pages/app-buy/app-buy.component';
// import { AppBuy2Component } from './pages/app-buy2/app-buy2.component';

import { FilterPipe, OrderByPipe } from './shared/pipes';

import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppBuyComponent,
    // AppBuy2Component,
    FilterPipe,
    OrderByPipe
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
