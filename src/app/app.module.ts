import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// In memeory reset Api
// We use this for demo purpose only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// services
import { AppProductService, InMemoryDataService, AppHttpService } from './shared/services';

import { AppPipes } from './shared/pipes';

// Routes
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AppProductCardComponent } from './shared/components/app-product-card/app-product-card.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppLoadingComponent } from './shared/components/app-loading/app-loading.component';
import { AppCartComponent } from './pages/app-cart/app-cart.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    ...AppPipes,
    AppComponent,
    AppProductCardComponent,
    AppHomeComponent,
    AppLoadingComponent,
    AppCartComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 }),
    RouterModule.forRoot(routes)
  ],
  providers: [AppProductService, {provide: Http, useClass: AppHttpService, deps: [XHRBackend, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
