/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppBuyComponent } from './app-buy.component';

describe('AppBuyComponent', () => {
  let component: AppBuyComponent;
  let fixture: ComponentFixture<AppBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
