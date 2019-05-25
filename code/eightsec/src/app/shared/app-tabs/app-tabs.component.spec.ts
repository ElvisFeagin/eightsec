import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EightsecTabsComponent } from './app-tabs.component';

describe('EightsecTabsComponent', () => {
  let component: EightsecTabsComponent;
  let fixture: ComponentFixture<EightsecTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EightsecTabsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightsecTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
