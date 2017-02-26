import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// In memeory reset Api
// We use this for demo purpose only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// services
import { AppProductService, InMemoryDataService } from './shared/services';

import { AppPipes } from './shared/pipes';

import { AppComponent } from './app.component';
import { AppProductCardComponent } from './shared/components/app-product-card/app-product-card.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';

@NgModule({
  declarations: [
    ...AppPipes,
    AppComponent,
    AppProductCardComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 })
  ],
  providers: [AppProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
