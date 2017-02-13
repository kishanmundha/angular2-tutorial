import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { AppFirebaseService, firebaseConfig } from './shared/app-firebase.service';

import { AppFirebaseHttpService } from './shared/app-firebase-http.service';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppBuyComponent } from './pages/app-buy/app-buy.component';
import { AppBuy2Component } from './pages/app-buy2/app-buy2.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'buy', component: AppBuyComponent },
  { path: 'buy2', component: AppBuy2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppBuyComponent,
    AppBuy2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppFirebaseService, {provide: Http, useClass: AppFirebaseHttpService, deps: [XHRBackend, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
