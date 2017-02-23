/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppProductService } from './app-product.service';

describe('AppProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppProductService]
    });
  });

  it('should ...', inject([AppProductService], (service: AppProductService) => {
    expect(service).toBeTruthy();
  }));
});
