import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ViewComponent } from './tab1-view.component';

describe('Tab1ViewComponent', () => {
  let component: Tab1ViewComponent;
  let fixture: ComponentFixture<Tab1ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
