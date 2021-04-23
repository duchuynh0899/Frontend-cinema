/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NowShowingComponent } from './now-showing.component';

describe('NowShowingComponent', () => {
  let component: NowShowingComponent;
  let fixture: ComponentFixture<NowShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
