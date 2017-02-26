import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../interfaces';

@Injectable()
export class AppProductService {

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http
      .get('app/products')
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
