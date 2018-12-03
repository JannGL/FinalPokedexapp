import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofPage } from './infof.page';

describe('InfofPage', () => {
  let component: InfofPage;
  let fixture: ComponentFixture<InfofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfofPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
