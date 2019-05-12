import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipsPage } from './clips.page';

describe('ClipsPage', () => {
  let component: ClipsPage;
  let fixture: ComponentFixture<ClipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
