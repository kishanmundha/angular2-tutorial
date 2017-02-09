/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppFirebaseHttpService } from './app-firebase-http.service';

describe('AppFirebaseHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppFirebaseHttpService]
    });
  });

  it('should ...', inject([AppFirebaseHttpService], (service: AppFirebaseHttpService) => {
    expect(service).toBeTruthy();
  }));
});
