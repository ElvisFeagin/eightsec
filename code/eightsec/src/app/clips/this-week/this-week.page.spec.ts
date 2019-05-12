import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWeekPage } from './this-week.page';

describe('ThisWeekPage', () => {
  let component: ThisWeekPage;
  let fixture: ComponentFixture<ThisWeekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisWeekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
