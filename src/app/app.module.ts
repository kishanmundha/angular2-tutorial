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

// Pipes
import { FilterPipe, OrderByPipe } from './shared/pipes';

// Components
import { AppComponent } from './app.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppCheckoutComponent } from './pages/app-checkout/app-checkout.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
import { AppProductCardComponent } from './shared/components/app-product-card/app-product-card.component';
import { AppCartComponent } from './pages/app-cart/app-cart.component';
import { AppCheckoutSuccessComponent } from './pages/app-checkout-success/app-checkout-success.component';

// Routes
import { routes } from './app.routing';

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
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 })
  ],
  providers: [AppProductService, {provide: Http, useClass: AppHttpService, deps: [XHRBackend, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
