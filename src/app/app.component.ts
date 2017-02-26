import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import { AppHttpService } from './shared/services/app-http.service';

import { AppLoadingComponent } from './shared/components/app-loading/app-loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AppLoadingComponent) loader: AppLoadingComponent;

  constructor(private http: Http) {
  }

  ngOnInit() {
    (this.http as AppHttpService).isLoading$.subscribe(status => {
      if (status === true) {
        this.loader.show();
      } else {
        this.loader.hide();
      }
    });
  }
}
