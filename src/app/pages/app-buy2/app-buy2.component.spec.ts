/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppBuy2Component } from './app-buy2.component';

describe('AppBuy2Component', () => {
  let component: AppBuy2Component;
  let fixture: ComponentFixture<AppBuy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBuy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBuy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
