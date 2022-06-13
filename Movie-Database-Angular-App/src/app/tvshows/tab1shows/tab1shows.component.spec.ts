import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1showsComponent } from './tab1shows.component';

describe('Tab1showsComponent', () => {
  let component: Tab1showsComponent;
  let fixture: ComponentFixture<Tab1showsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1showsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1showsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
