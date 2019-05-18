import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeatPage } from './heat.page';

describe('ThisWeekPage', () => {
  let component: HeatPage;
  let fixture: ComponentFixture<HeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeatPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
