import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import { AppHttpService } from './shared/services/app-http.service';
import { AppProductService } from './shared/services/app-product.service';

import { AppLoadingComponent } from './shared/components/app-loading/app-loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AppLoadingComponent) loader: AppLoadingComponent;

  cartItemCount: number;

  constructor(private http: Http, private appProductService: AppProductService) {
  }

  ngOnInit() {
    (this.http as AppHttpService).isLoading$.subscribe(status => {
      if (status === true) {
        this.loader.show();
      } else {
        this.loader.hide();
      }
    });

    this.appProductService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }
}
