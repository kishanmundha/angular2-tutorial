import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { AppFirebaseService, firebaseConfig } from './shared/app-firebase.service';

import { AppFirebaseHttpService } from './shared/app-firebase-http.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'buy', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
