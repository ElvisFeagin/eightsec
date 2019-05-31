import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatDetailPage } from './heat-detail.page';

describe('HeatDetailPage', () => {
  let component: HeatDetailPage;
  let fixture: ComponentFixture<HeatDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
